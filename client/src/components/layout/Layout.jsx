import { Outlet } from "react-router-dom";

import CommandPalette from "../ui/CommandPalette";
import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = () => {
    return (
        <>
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