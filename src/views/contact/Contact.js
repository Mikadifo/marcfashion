import Button from '../../components/button/Button';
import FooterHero from '../../components/footerHero/FooterHero';
import './Contact.css';

const Contact = () => {
    const locationSection = () => (
        <div className="location text-center">
            <h3>Ubicación</h3>
            <div className="row">
                <div className="col">MAP</div>
                <div className="col text-start">
                    <h5>Puedes visitarnos físicamente</h5>
                    <a href="#" target="_blank" rel="noreferrer">
                        <p>San Pedro, Quisapincha, Ambato - Ecuador.</p>
                    </a>
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
                    <a
                        href="https://wa.me/593995487770"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {/*TODO: extract this*/}
                        <Button text={'+ 593 99 548 7770'} type="button" />
                    </a>
                </div>
                <div className="col-12 col-sm-6 p-0">
                    <a
                        href="https://wa.me/593996844966"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button text={'+ 593 99 684 4966'} type="button" />
                    </a>
                </div>
            </div>
            <div className="row text-center text-sm-start">
                <h5 className="pe-0 ps-0">Envianos un email</h5>
                <div className="col p-0">
                    <a href="mailto:alexistoala@outlook.com">
                        <Button
                            text={'alexistoala@outlook.com'}
                            type="button"
                        />
                    </a>
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
