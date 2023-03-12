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

test('render TODO', () => {});

test('render footer hero', () => {
    const hero = screen.getByTestId('footer-hero');
    expect(hero).toBeInTheDocument();
});
