import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mision, vision } from './../../constants/texts';
import { history } from './../../resources/info/history';
import About from './About';

beforeEach(() => {
    window.scrollTo = jest.fn();
    render(
        <MemoryRouter>
            <About />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('render history section & about view', () => {
    const about = screen.getByTestId('about');
    const historySection = about.getElementsByClassName('history')[0];
    const h3 = historySection.getElementsByTagName('h3')[0];
    expect(about).toBeInTheDocument();
    expect(historySection).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent('Nuestra Historia');
    history.forEach((element, i) => {
        const h4 = historySection.getElementsByTagName('h4')[i];
        const paragraph = historySection.getElementsByTagName('p')[i];
        expect(h4).toBeInTheDocument();
        expect(h4).toHaveTextContent(element.year);
        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toHaveTextContent(element.paragraph);
    });
});

test('render mision-vision section', () => {
    const about = screen.getByTestId('about');
    const misionVisionSection =
        about.getElementsByClassName('mision-vision')[0];
    const h3Mision = misionVisionSection.getElementsByTagName('h3')[0];
    const h3Vision = misionVisionSection.getElementsByTagName('h3')[1];
    const paragraphMision = misionVisionSection.getElementsByTagName('p')[0];
    const paragraphVision = misionVisionSection.getElementsByTagName('p')[1];
    expect(misionVisionSection).toBeInTheDocument();
    expect(h3Mision).toBeInTheDocument();
    expect(h3Mision).toHaveTextContent('Misión');
    expect(h3Vision).toHaveTextContent('Visión');
    expect(paragraphMision).toBeInTheDocument();
    expect(paragraphVision).toBeInTheDocument();
    expect(paragraphMision).toHaveTextContent(mision);
    expect(paragraphVision).toHaveTextContent(vision);
});

test('render footer hero', () => {
    const hero = screen.getByTestId('footer-hero');
    expect(hero).toBeInTheDocument();
});
