import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navabar from "../Pages/Shared/Navbar/Navabar";

const MainLayout = () => {
    return (
        <div>
            <Navabar></Navabar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;