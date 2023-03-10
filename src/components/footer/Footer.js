import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer data-testid="footer">
            <div className="row foot-info text-center text-sm-start">xd</div>
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
