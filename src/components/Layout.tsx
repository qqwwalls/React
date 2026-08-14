import { Outlet } from "react-router";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-gray-100 font-sans">
            <Header />
            <Menu />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex-grow w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
