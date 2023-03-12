import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import FooterHero from '../../components/footerHero/FooterHero';
import './Contact.css';

const Contact = () => {
    const locationSection = () => (
        <div className="location text-center">
            <h3>Ubicación</h3>
            <div className="row">
                <div className="col">MAP</div>
                <div className="col">
                    <h5>Puedes visitarnos físicamente</h5>
                    <Link>
                        <p>San Pedro, Quisapincha, Ambato - Ecuador.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
    const contactSection = () => (
        <div class="contact-buttons text-center">
            <h3>Contacto</h3>
            <div className="row">
                <h5>Llámanos o escríbenos por Whatsapp</h5>
                <div className="col">
                    <Link>
                        {/*TODO: extract this*/}
                        <Button text={'+ 593 99 548 7770'} />
                    </Link>
                </div>
                <div className="col">
                    <Link>
                        <Button text={'+ 593 99 684 4966'} />
                    </Link>
                </div>
            </div>
            <div className="row">
                <h5>Envianos un email</h5>
                <div className="col">
                    <Link>
                        <Button text={'alexistoala@outlook.com'} />
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <div data-testid="contact">
            <div className="contact-info">
                {locationSection()}
                {contactSection()}
            </div>
            <FooterHero background={'dark'} />
        </div>
    );
};
export default Contact;
