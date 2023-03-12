import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { standards } from './../../resources/info/standars';
import {
    aboutFirstParagraph,
    aboutSecondParagraph,
} from '../../constants/texts';

beforeEach(() => {
    window.scrollTo = jest.fn();
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('render call to action & home view', () => {
    const home = screen.getByTestId('home');
    const img = home.getElementsByTagName('img')[0];
    const h2 = home.getElementsByTagName('h2')[0];
    const h3 = home.getElementsByTagName('h3')[0];
    const button = home.getElementsByTagName('a')[0];
    expect(home).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'home_temp.png'); //TODO: change the name of the img
    expect(img).toHaveAttribute('alt');
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent('MARCFASHION');
    expect(h3).toHaveTextContent('Vistiendo con elegancia');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Elige tu estilo');
    expect(button).toHaveAttribute('href', '/tienda');
});

test('render navbar', () => {
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
});

test('render about section', () => {
    const home = screen.getByTestId('home');
    const aboutSection = home.getElementsByClassName('about')[0];
    const h3 = aboutSection.getElementsByTagName('h3')[0];
    const paragraphs = aboutSection.getElementsByTagName('p');
    const link = aboutSection.getElementsByTagName('a')[0];
    expect(aboutSection).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent('¿Quiénes somos?');
    expect(paragraphs[0]).toBeInTheDocument();
    expect(paragraphs[1]).toBeInTheDocument();
    expect(paragraphs[0]).toHaveTextContent(aboutFirstParagraph);
    expect(paragraphs[1]).toHaveTextContent(aboutSecondParagraph);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/conocenos');
    expect(link).toHaveTextContent('Conócenos más');
});

test('render standars section', () => {
    const home = screen.getByTestId('home');
    const standardsSection = home.getElementsByClassName('standards')[0];
    const h3 = standardsSection.getElementsByTagName('h3')[0];
    expect(standardsSection).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent('Te ofrecemos');
    standards.forEach((standard, i) => {
        const h1 = standardsSection.getElementsByTagName('h1')[i];
        const paragraph = standardsSection.getElementsByTagName('p')[i];
        expect(h1).toBeInTheDocument();
        expect(h1).toHaveTextContent(standard.title);
        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toHaveTextContent(standard.description);
    });
});

test('render footer hero', () => {
    const hero = screen.getByTestId('footer-hero');
    expect(hero).toBeInTheDocument();
});
