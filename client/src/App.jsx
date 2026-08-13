import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";

import Layout from "./components/layout/Layout";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import SmoothScroll from "./components/SmoothScroll";


const App = () => {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <BrowserRouter>

        <Routes>

          <Route element={<Layout />}>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/work"
              element={<Work />}
            />

            <Route
              path="/projects"
              element={<Projects />}
            />

            <Route
              path="/projects/:slug"
              element={<ProjectDetails />}
            />

            <Route
              path="/resume"
              element={<Resume />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Route>

        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
};


export default App;