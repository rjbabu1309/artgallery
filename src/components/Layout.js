import { Outlet } from "react-router";
// import Footer from "./partials/footer/Footer";
import Header from "./partials/header/Header";


const Layout = () => {
    return(
        <>
        <Header></Header>
        <Outlet />
        {/* <Footer></Footer> */}
        </>
    );
}

export default Layout