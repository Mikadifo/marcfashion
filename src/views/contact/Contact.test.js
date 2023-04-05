import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {
    address,
    email,
    embededMapURL,
    locationURL,
    primaryNumber,
    primaryNumberURL,
    secondaryNumber,
    secondaryNumberURL,
} from '../../constants/texts';
import Contact from './Contact';

beforeEach(() => {
    window.scrollTo = jest.fn();
    render(
        <MemoryRouter>
            <Contact />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('render location section & contact view', () => {
    const contact = screen.getByTestId('contact');
    const locationSection = contact.getElementsByClassName('location')[0];
    const h3 = contact.getElementsByTagName('h3')[0];
    const h5 = contact.getElementsByTagName('h5')[0];
    const link = contact.getElementsByTagName('a')[0];
    const map = contact.getElementsByTagName('iframe')[0];
    expect(contact).toBeInTheDocument();
    expect(locationSection).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent('Ubicación');
    expect(h5).toBeInTheDocument();
    expect(h5).toHaveTextContent('Puedes visitarnos físicamente');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(address);
    expect(link).toHaveAttribute('href', locationURL);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
    expect(map).toBeInTheDocument();
    expect(map).toHaveAttribute('title', 'marcfashion-map');
    expect(map).toHaveAttribute('src', embededMapURL);
});

test('render contact section', () => {
    const contact = screen.getByTestId('contact');
    const contactSection = contact.getElementsByClassName('contact-buttons')[0];
    const h3 = contactSection.getElementsByTagName('h3')[0];
    const h5 = contactSection.getElementsByTagName('h5');
    const buttons = contactSection.getElementsByTagName('a');
    expect(contactSection).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent('Contacto');
    expect(h5[0]).toBeInTheDocument();
    expect(h5[0]).toHaveTextContent('Llámanos o escríbenos por Whatsapp');
    expect(h5[1]).toBeInTheDocument();
    expect(h5[1]).toHaveTextContent('Envianos un email');
    //Primary Phone
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[0]).toHaveTextContent(primaryNumber);
    expect(buttons[0]).toHaveAttribute('href', primaryNumberURL);
    expect(buttons[0]).toHaveAttribute('target', '_blank');
    expect(buttons[0]).toHaveAttribute('rel', 'noreferrer');
    //Secondary Phone
    expect(buttons[1]).toBeInTheDocument();
    expect(buttons[1]).toHaveTextContent(secondaryNumber);
    expect(buttons[1]).toHaveAttribute('href', secondaryNumberURL);
    expect(buttons[1]).toHaveAttribute('target', '_blank');
    expect(buttons[1]).toHaveAttribute('rel', 'noreferrer');
    //Email
    expect(buttons[2]).toBeInTheDocument();
    expect(buttons[2]).toHaveTextContent(email);
    expect(buttons[2]).toHaveAttribute('href', `mailto:${email}`);
    expect(buttons[2]).not.toHaveAttribute('target', '_blank');
    expect(buttons[2]).not.toHaveAttribute('rel', 'noreferrer');
});

test('render footer hero', () => {
    const hero = screen.getByTestId('footer-hero');
    expect(hero).toBeInTheDocument();
});
