import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

beforeEach(() => {
    window.scrollTo = jest.fn();
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('navbar render logo and links', () => {
    const navbar = screen.getByTestId('navbar');
    const logo = screen.getByTestId('nav-logo');
    expect(navbar).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(navbar).toHaveTextContent('Inicio');
    expect(navbar).toHaveTextContent('Tienda');
    expect(navbar).toHaveTextContent('Conócenos');
    expect(navbar).toHaveTextContent('Contacto');
    expect(logo).toHaveAttribute('href', '/');
    expect(logo.firstChild).toHaveAttribute('src', 'logo.png');
    expect(screen.getByText('Inicio')).toHaveAttribute('href', '/');
    expect(screen.getByText('Tienda')).toHaveAttribute('href', '/tienda');
    expect(screen.getByText('Conócenos')).toHaveAttribute('href', '/conocenos');
    expect(screen.getByText('Contacto')).toHaveAttribute('href', '/contacto');
    expect(screen.getByText('Contacto')).toHaveAttribute('href', '/contacto');
});
