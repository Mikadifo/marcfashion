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
            <div className="row text-center text-sm-start">
                <h5 className="pe-0 ps-0">
                    Llámanos o escríbenos por Whatsapp
                </h5>
                <div className="col-12 col-sm-6 ps-0 pe-0 pe-sm-4 pb-4 pb-sm-0">
                    <Link>
                        {/*TODO: extract this*/}
                        <Button text={'+ 593 99 548 7770'} type="button" />
                    </Link>
                </div>
                <div className="col-12 col-sm-6 p-0">
                    <Link>
                        <Button text={'+ 593 99 684 4966'} type="button" />
                    </Link>
                </div>
            </div>
            <div className="row text-center text-sm-start">
                <h5 className="pe-0 ps-0">Envianos un email</h5>
                <div className="col p-0">
                    <Link>
                        <Button
                            text={'alexistoala@outlook.com'}
                            type="button"
                        />
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
