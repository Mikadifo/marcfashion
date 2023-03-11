import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import Button from './../../components/button/Button';
import homeTemp from './../../resources/imgs/home_temp.png'; //TODO: Change when get imgs
import { standards } from './../../resources/info/standars';
import './Home.css';
import './IntroSection.css';
import './AboutSection.css';
import './StandardsSection.css';

const Home = () => {
    const introSection = () => (
        <div className="intro text-center">
            <img src={homeTemp} alt="Brand_Model_Picture" />
            <h2>
                <span className="brand-left">MARC</span>
                <span className="brand-right">FASHION</span>
            </h2>
            <h3>Vistiendo con elegancia</h3>
            <Link to="/tienda">
                <Button text={'Elige tu estilo'} style="button" />
            </Link>
        </div>
    );
    const aboutSection = () => (
        <div className="about">
            <h3 className="text-center">¿Quiénes somos?</h3>
            <p>
                Somos un grupo de sastres artesanos enfocados en la confección
                de prendas formales para caballeros y niños, diseñamos nuestros
                trajes, abrigos, chaquetas y pantalones basados en altos
                estándares de calidad y con la garantía de las mejores telas
                nacionales y extranjeras.
            </p>
            <p className="m-0">
                Contamos con la experiencia necesaria para crear un diseño
                adecuado para la ocasión de nuestros clientes lo que nos da
                ventaja sobre otras marcas para poder complacer las exigencias
                de nuestros consumidores.
            </p>
            <div className="text-center">
                <Link to="/conocenos">
                    <Button text={'Conócenos más'} style="link" />
                </Link>
            </div>
        </div>
    );
    const standardsSection = () => (
        <div className="standards">
            <h3 className="text-center">Te ofrecemos</h3>
            <div className="row text-center">
                {standards.map((standard) => (
                    <div className="col" key={standard.id}>
                        <h1>{standard.title}</h1>
                        <p>{standard.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div data-testid="home">
            {introSection()}
            <NavBar />
            {aboutSection()}
            {standardsSection()}
        </div>
    );
};

export default Home;
