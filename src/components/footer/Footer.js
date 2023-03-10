import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const { pathname } = useLocation();

    return (
        <footer
            className={
                pathname === '/instalacion' || pathname === '/cuerpo_medico'
                    ? 'less-margin'
                    : 'footer-margin'
            }
            data-testid="footer"
        >
            <div className="row foot-info text-center text-sm-start">
                <div className="col my-auto">
                    <div className="row">
                        <h3>CENTERAVID</h3>
                    </div>
                    <div className="row pb-4 pb-sm-0">
                        <h5>Estamos aquí para ayudarte.</h5>
                    </div>
                </div>
                <div className="col justify-content-center justify-content-sm-end d-flex p-0">
                    <div className="my-auto">
                        <div className="foot-icons">
                            <div className="text-center">
                                <a
                                    href="https://www.facebook.com/dipidiana/?ref=page_internal"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-testid="facebook-link"
                                >
                                    <i className="bi bi-facebook" />
                                </a>
                                <a
                                    href="https://www.instagram.com/centeravid/?hl=es"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-testid="instagram-link"
                                >
                                    <i className="bi bi-instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot-copy text-center">
                © 2023 Marcfashion. Todos los derechos reservados. Desarrollado
                por{' '}
                <a
                    href="https://mikadifo.com"
                    target="_blank"
                    rel="noreferrer"
                    data-testid="dev-link"
                >
                    Mikadifo
                </a>
            </div>
        </footer>
    );
};

export default Footer;
