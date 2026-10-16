import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

function MainLayout() {
    return(
        <>
        <header>Header</header>
          <Outlet />
        <Footer />
        </>
    );
}

export default MainLayout;