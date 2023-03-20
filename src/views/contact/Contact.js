import Button from '../../components/button/Button';
import FooterHero from '../../components/footerHero/FooterHero';
import { otherLocations } from '../../resources/info/locations';
import {
    address,
    email,
    locationURL,
    primaryNumber,
    primaryNumberURL,
    secondaryNumber,
    secondaryNumberURL,
    embededMapURL,
} from './../../constants/texts';
import './Contact.css';

const Contact = () => {
    const locationSection = () => (
        <div className="location text-center">
            <h3>Ubicación</h3>
            <iframe
                title="marcfashion-map"
                className="map-frame"
                src={embededMapURL}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h5 className="text-start">Puedes visitarnos físicamente en:</h5>
            <a
                href={locationURL}
                target="_blank"
                rel="noreferrer"
                className="text-start location-link"
            >
                <p>{address}</p>
            </a>
            <h5 className="text-start">
                También puedes encontrarnos en la sección de ropa de:
            </h5>
            {otherLocations.map((cityLocation) => (
                <p className="text-start" key={cityLocation.id}>
                    {cityLocation.locations}
                </p>
            ))}
        </div>
    );
    const contactSection = () => (
        <div className="contact-buttons text-center">
            <h3>Contacto</h3>
            <div className="row text-center text-sm-start">
                <h5 className="pe-0 ps-0">
                    Llámanos o escríbenos por Whatsapp
                </h5>
                <div className="col-12 col-sm-6 ps-0 pe-0 pe-sm-4 pb-4 pb-sm-0">
                    <a href={primaryNumberURL} target="_blank" rel="noreferrer">
                        <Button text={primaryNumber} type="button" />
                    </a>
                </div>
                <div className="col-12 col-sm-6 p-0">
                    <a
                        href={secondaryNumberURL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button text={secondaryNumber} type="button" />
                    </a>
                </div>
            </div>
            <div className="row text-center text-sm-start">
                <h5 className="pe-0 ps-0">Envianos un email</h5>
                <div className="col p-0">
                    <a href={`mailto:${email}`}>
                        <Button text={email} type="button" />
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
