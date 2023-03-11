import { Link } from 'react-router-dom';
//import Button from './../../components/button/Button';
//import clinicImg from './../../resources/imgs/home_img.jpeg';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container" data-testid="home">
            <div className="intro">
                IMG
                <h2>MARC</h2>
                <h2>FASHION</h2>
                <h3>Vistiendo con elegancia</h3>
                <button>Elige tu Estilo</button>
            </div>
        </div>
    );
};

export default Home;
