import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './../../logo.png';
import './NavBar.css';

const NavBar = () => {
    const { pathname } = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav
            className="navbar navbar-expand-lg sticky-top"
            data-testid="navbar"
        >
            <div className="container-fluid p-0">
                <Link
                    className="navbar-brand p-0 m-0"
                    to="/"
                    data-testid="nav-logo"
                >
                    <img src={logo} alt="Logo" />
                </Link>
                <button
                    className="navbar-toggler nav-menu p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {showMenu ? (
                        <i class="bi bi-list-nested" />
                    ) : (
                        <i className="bi bi-list" />
                    )}
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    pathname === '/' && 'current'
                                }`}
                                aria-current="page"
                                to="/"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    pathname === '/tienda' && 'current'
                                }`}
                                to="/tienda"
                            >
                                Tienda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    pathname === '/conocenos' && 'current'
                                }`}
                                to="/conocenos"
                            >
                                Conócenos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    pathname === '/contacto' && 'current'
                                }`}
                                to="/contacto"
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
