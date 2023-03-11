import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer data-testid="footer">
            <div className="foot-info row">
                <div className="col">
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li>
                            <Link to="/tienda">Tienda</Link>
                        </li>
                        <li>
                            <Link to="/conocenos">Conócenos</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Redes</h5>
                    <ul class="list-unstyled">
                        <li>
                            <a
                                href="https://www.facebook.com/people/MarcFashion/100054329988831/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/alexistoala/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="mailto:alexistoala@outlook.com">Email</a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/593995487770"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Whatsapp
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Ubicación</h5>
                    <ul class="list-unstyled">
                        <li>
                            <a href="#!" rel="noreferrer" target="_blank">
                                San Pedro, Quisapincha Ambato - Ecuador.
                            </a>
                        </li>
                    </ul>
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
