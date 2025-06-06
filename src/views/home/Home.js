import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import Button from './../../components/button/Button';
import homeTemp from './../../resources/imgs/home.jpeg';
import FooterHero from '../../components/footerHero/FooterHero';
import { standards } from './../../resources/info/standars';
import {
    aboutFirstParagraph,
    aboutSecondParagraph,
} from '../../constants/texts';
import './Home.css';
import './IntroSection.css';
import './AboutSection.css';
import './StandardsSection.css';

const Home = () => {
    const introSection = () => (
        <div className="intro text-center">
            <img
                src={homeTemp}
                alt="Brand_Model_Picture"
                loading="lazy"
                decoding="async"
            />
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
    const aboutSection = () => (
        <div className="about">
            <h3 className="text-center">¿Quiénes somos?</h3>
            <p>{aboutFirstParagraph}</p>
            <p className="m-0">{aboutSecondParagraph}</p>
            <div className="text-center">
                <Link to="/conocenos">
                    <Button text={'Conócenos más'} type="link" />
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
            <FooterHero background={'white'} />
        </div>
    );
};

export default Home;
