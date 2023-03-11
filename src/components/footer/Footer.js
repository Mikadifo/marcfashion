import { Link } from 'react-router-dom';
import { footerLists } from './../../resources/info/footerLists';
import './Footer.css';

const Footer = () => {
    return (
        <footer data-testid="footer">
            <div className="foot-info row" data-testid="foot-info">
                {footerLists.map((list) => (
                    <div className="col" key={list.id}>
                        <h5>{list.title}</h5>
                        <ul className="list-unstyled">
                            {list.links.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.url}
                                        target={link.local ? '' : '_blank'}
                                        rel={link.local ? '' : 'noreferrer'}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="foot-copy text-center">
                © 2023 MarcFashion. Todos los derechos reservados. Desarrollado
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
