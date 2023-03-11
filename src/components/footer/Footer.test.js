import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

beforeEach(() => {
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('footer render text and links', () => {
    const footer = screen.getByTestId('footer');
    const devLink = screen.getByTestId('dev-link');
    const footInfo = screen.getByTestId('foot-info');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent(
        '© 2023 MarcFashion. Todos los derechos reservados. Desarrollado por Mikadifo',
    );
    expect(devLink).toBeInTheDocument();
    expect(devLink).toHaveTextContent('Mikadifo');
    expect(devLink).toHaveAttribute('href', 'https://mikadifo.com');
    expect(devLink).toHaveAttribute('target', '_blank');
    expect(devLink).toHaveAttribute('rel', 'noreferrer');
    expect(footInfo).toBeInTheDocument();
    const listTitles = footInfo.getElementsByTagName('h5');
    expect(footInfo).toBeInTheDocument();
    //Using 0,1,3 because it has to be in that order
    expect(listTitles[0].textContent.trim()).toBe('Links');
    expect(listTitles[1].textContent.trim()).toBe('Redes');
    expect(listTitles[2].textContent.trim()).toBe('Ubicación');
    const listLinks = footInfo.getElementsByTagName('a');
    listLinks.forEach((link) => {
        console.log(link);
    });
    //expect(instaLink).toHaveAttribute(
    //'href',
    //'https://www.instagram.com/centeravid/?hl=es',
    //);
    //expect(instaLink).toHaveAttribute('target', '_blank');
    //expect(faceLink).toHaveAttribute('rel', 'noreferrer');
});
