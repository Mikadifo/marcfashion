import { Link, useLocation } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import Button from './../../components/button/Button';
import homeTemp from './../../resources/imgs/home_temp.png'; //TODO: Change when get imgs
import './Home.css';
import './IntroSection.css';

const Home = () => {
    const { pathname } = useLocation();
    const introSection = () => (
        <div className="intro text-center">
            <img src={homeTemp} alt="Brand_Model_Picture" />
            <h2>
                <span className="brand-left">MARC</span>
                <span className="brand-right">FASHION</span>
            </h2>
            <h3>Vistiendo con elegancia</h3>
            <Link to="/tienda">
                <Button text={'Elige tu estilo'} />
            </Link>
        </div>
    );
    const aboutSection = () => (
        <div class="about">
            <h3>¿Quiénes somos?</h3>
            <p>
                Somos un grupo de sastres artesanos enfocados en la confección
                de prendas formales para caballeros y niños, diseñamos nuestros
                trajes, abrigos, chaquetas y pantalones basados en altos
                estándares de calidad y con la garantía de las mejores telas
                nacionales y extranjeras.
            </p>
            <p>
                Contamos con la experiencia necesaria para crear un diseño
                adecuado para la ocasión de nuestros clientes lo que nos da
                ventaja sobre otras marcas para poder complacer las exigencias
                de nuestros consumidores.
            </p>
            <button>LINK</button>
        </div>
    );

    return (
        <div data-testid="home">
            {introSection()}
            {pathname === '/' && <NavBar />}
            <div className="home-container" data-testid="home">
                {aboutSection()}
            </div>
        </div>
    );
};

export default Home;
