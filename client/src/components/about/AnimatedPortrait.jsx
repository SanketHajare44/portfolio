import { useEffect, useRef, useState } from "react";

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

const lerp = (a, b, t) => a + (b - a) * t;

const ease = (t) => t * t * (3 - 2 * t);

const seeded = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};

export default function AnimatedPortrait({
  src,
  alt = "Portrait",
  className = "",
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const [ratio, setRatio] = useState(4 / 5);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const photo = imgRef.current;

    if (!wrap || !canvas || !photo) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;

    let W = 0;
    let H = 0;

    let cols = 0;
    let rows = 0;

    let lum = null;
    let rx = null;
    let ry = null;
    let rd = null;

    let img = null;

    let target = 0;
    let d = 0;
    let lastD = -1;

    let dirty = true;

    let isDark = document.documentElement.classList.contains("dark");

    /* ---------- GRID + PARTICLE RANDOM VALUES ---------- */

    const buildGrid = () => {
      if (!img || !W) return;

      cols = clamp(Math.round(W / 3.4), 80, 170);

      rows = Math.round((cols * img.height) / img.width);

      const off = document.createElement("canvas");

      off.width = cols;
      off.height = rows;

      const octx = off.getContext("2d", {
        willReadFrequently: true,
      });

      if (!octx) return;

      octx.drawImage(img, 0, 0, cols, rows);

      const data = octx.getImageData(0, 0, cols, rows).data;

      const n = cols * rows;

      lum = new Float32Array(n);
      rx = new Float32Array(n);
      ry = new Float32Array(n);
      rd = new Float32Array(n);

      for (let i = 0; i < n; i++) {
        const l =
          (0.299 * data[i * 4] +
            0.587 * data[i * 4 + 1] +
            0.114 * data[i * 4 + 2]) /
          255;

        lum[i] = clamp((l - 0.05) / 0.85);

        const a = seeded(i) * Math.PI * 2;

        const m = Math.pow(seeded(i + 4242), 0.6);

        rx[i] = Math.cos(a) * m;

        ry[i] = Math.sin(a) * m - 0.45;

        rd[i] = seeded(i + 9999);
      }

      dirty = true;
    };

    /* ---------- RESIZE ---------- */

    const resize = () => {
      const r = wrap.getBoundingClientRect();

      W = r.width;
      H = r.height;

      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);

      buildGrid();

      computeTarget();
    };

    /* ---------- SCROLL-LINKED ANIMATION ---------- */

    function computeTarget() {
      if (reduce) {
        target = 0;
        return;
      }

      const rect = wrap.getBoundingClientRect();

      const vh = window.innerHeight;

      // Start dissolving earlier as the portrait approaches the navbar.
      const leaving = clamp((100 - rect.top) / (rect.height * 0.65));

      // Preserve the entering animation.
      const entering = clamp((rect.top - vh * 0.65) / (vh * 0.25));

      target = Math.max(leaving, entering);
    }

    /* ---------- PARTICLE RENDERING ---------- */

    const draw = () => {
      raf = requestAnimationFrame(draw);

      // Increased from 0.28 to 0.45 for faster response.
      d += (target - d) * 0.45;

      if (Math.abs(target - d) < 0.001) {
        d = target;
      }

      if (!lum || (!dirty && d === lastD)) {
        return;
      }

      lastD = d;
      dirty = false;

      const s = ease(d);

      // Fade the original image before the particles disappear.
      photo.style.opacity = (0.9 * (1 - clamp(s / 0.5))).toFixed(3);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, W, H);

      const cell = Math.min(W / cols, H / rows);

      const ox = (W - cell * cols) / 2;

      const oy = (H - cell * rows) / 2;

      // Increased particle spread for a more visible dissolve.
      const spread = Math.max(W, H) * 0.2;

      const base = isDark ? [244, 241, 234] : [35, 35, 40];

      const k = isDark ? s * 0.75 : s * 0.25;

      ctx.fillStyle = `rgb(
        ${Math.round(lerp(base[0], 255, k))},
        ${Math.round(lerp(base[1], 150, k))},
        ${Math.round(lerp(base[2], 70, k))}
      )`;

      ctx.globalAlpha =
        lerp(0.55, 0.9, clamp(s * 2)) * (1 - clamp((s - 0.65) / 0.35));

      if (ctx.globalAlpha > 0.003) {
        ctx.beginPath();

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const i = y * cols + x;

            const l = lum[i];

            const k2 = s * (0.35 + rd[i]);

            const px = ox + (x + 0.5) * cell + rx[i] * spread * k2;

            const py = oy + (y + 0.5) * cell + ry[i] * spread * k2;

            const r =
              cell * 0.5 * Math.pow(l, 0.85) * (1 - s * (0.5 + 0.5 * rd[i]));

            if (r < 0.25) continue;

            ctx.moveTo(px + r, py);

            ctx.arc(px, py, r, 0, Math.PI * 2);
          }
        }

        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    /* ---------- IMAGE LOADING ---------- */

    img = new Image();

    img.src = src;

    img.onload = () => {
      setRatio(img.width / img.height);

      requestAnimationFrame(resize);
    };

    img.onerror = () => {
      console.error("Failed to load portrait image:", src);
    };

    /* ---------- OBSERVERS ---------- */

    const ro = new ResizeObserver(resize);

    ro.observe(wrap);

    const onScroll = () => {
      computeTarget();
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    const mo = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");

      dirty = true;
    });

    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    /* ---------- START ANIMATION ---------- */

    raf = requestAnimationFrame(draw);

    /* ---------- CLEANUP ---------- */

    return () => {
      cancelAnimationFrame(raf);

      ro.disconnect();

      mo.disconnect();

      window.removeEventListener("scroll", onScroll);

      window.removeEventListener("resize", onScroll);

      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div
      ref={wrapRef}
      className={`relative w-full select-none ${className}`}
      style={{
        aspectRatio: ratio,
        WebkitMaskImage:
          "radial-gradient(ellipse 85% 90% at 50% 48%, #000 70%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 85% 90% at 50% 48%, #000 70%, transparent 100%)",
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover opacity-0"
      />

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
