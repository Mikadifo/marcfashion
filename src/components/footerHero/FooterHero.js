import { Link } from 'react-router-dom';
import Button from './../../components/button/Button';
import './FooterHero.css';

const FooterHero = ({ background }) => {
    return (
        <div
            className={`footer-hero text-center text-sm-start ${background}`}
            data-testid="footer-hero"
        >
            <h2>
                <span className="brand-left">MARC</span>
                <span className="brand-right">FASHION</span>
            </h2>
            <h3>Vistiendo con elegancia</h3>
            <Link to="/tienda">
                <Button text={'Elige tu estilo'} type="button" />
            </Link>
        </div>
    );
};

export default FooterHero;
