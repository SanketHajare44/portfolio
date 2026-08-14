import { Outlet } from "react-router-dom";

import CommandPalette from "../ui/CommandPalette";
import Footer from "./Footer";
import Navbar from "./NavBar";
import ScrollToTop from "../ui/ScrollToTop";

const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />

            <CommandPalette />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default Layout;