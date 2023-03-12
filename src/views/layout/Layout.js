import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/NavBar';

const Layout = () => {
    const { pathname } = useLocation();

    return (
        <>
            {pathname !== '/' && <NavBar />}
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
