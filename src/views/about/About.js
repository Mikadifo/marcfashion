import FooterHero from '../../components/footerHero/FooterHero';
import { mision, vision } from './../../constants/texts';
import './About.css';
import './HistorySection.css';
import './MisionVisionSection.css';

const About = () => {
    const historySection = () => <div className="history">HISTORY</div>;
    const misionVisionSection = () => (
        <div className="mision-vision row text-center text-sm-start">
            <div className="col-12 col-md-6 ps-0">
                <h3>Misión</h3>
                <p className="text-start">{mision}</p>
            </div>
            <div className="col-12 col-md-6 pe-0">
                <h3>Visión</h3>
                <p className="text-start">{vision}</p>
            </div>
        </div>
    );

    return (
        <div data-testid="about">
            {historySection()}
            {misionVisionSection()}
            <FooterHero background={'white'} />
        </div>
    );
};
export default About;
