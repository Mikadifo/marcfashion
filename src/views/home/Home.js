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
            <Button text={'Elige tu estilo'} />
        </div>
    );

    return (
        <div data-testid="home">
            {introSection()}
            {pathname === '/' && <NavBar />}
            <div className="home-container" data-testid="home">
                other content
            </div>
        </div>
    );
};

export default Home;
