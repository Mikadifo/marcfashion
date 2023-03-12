import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FooterHero from './FooterHero';

beforeEach(() => {
    window.scrollTo = jest.fn();
    render(
        <MemoryRouter>
            <FooterHero />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('footer hero render brand name, headline and button', () => {
    const hero = screen.getByTestId('footer-hero');
    const button = hero.getElementsByTagName('a');
    expect(hero).toBeInTheDocument();
    expect(hero).toHaveTextContent('MARCFASHION');
    expect(hero).toHaveTextContent('Vistiendo con elegancia');
    expect(button[0]).toBeInTheDocument();
    expect(button[0]).toHaveTextContent('Elige tu estilo');
    expect(button[0]).toHaveAttribute('href', '/tienda');
});
