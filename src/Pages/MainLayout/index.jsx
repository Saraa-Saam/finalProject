import { Outlet } from "react-router-dom";
import Footer from "../../Components/Common/Footer";
import Navbar from "../../Components/Common/Navbar";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
