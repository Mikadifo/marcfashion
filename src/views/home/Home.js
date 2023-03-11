import { Link } from 'react-router-dom';
//import Button from './../../components/button/Button';
import homeTemp from './../../resources/imgs/home_temp.png'; //TODO: Change when get imgs
import './Home.css';

const Home = () => {
    return (
        <div className="home-container" data-testid="home">
            <div className="intro text-center">
                <img src={homeTemp} alt="Brand_Model_Picture" />
                <h2>
                    <span className="brand-left">MARC</span>
                    <span className="brand-right">FASHION</span>
                </h2>
                <h3>Vistiendo con elegancia</h3>
                <button>Elige tu Estilo</button>
            </div>
        </div>
    );
};

export default Home;
