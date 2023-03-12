import FooterHero from '../../components/footerHero/FooterHero';
import { mision, vision } from './../../constants/texts';
import { history } from './../../resources/info/history';
import './About.css';
import './HistorySection.css';
import './MisionVisionSection.css';

const About = () => {
    const historySection = () => (
        <div className="history text-center">
            <h3>Nuestra Historia</h3>
            {history.map((element, i) => (
                <div className="row" key={element.id}>
                    <div
                        className={`col-12 col-lg-3 ${
                            i % 2 !== 0 && 'order-lg-last'
                        }`}
                    >
                        <h4 style={element.style}>{element.year}</h4>
                    </div>
                    <div className="col">
                        <p className="text-start">{element.paragraph}</p>
                    </div>
                </div>
            ))}
        </div>
    );
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
