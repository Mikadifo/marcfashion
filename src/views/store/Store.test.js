import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Store from './Store';

beforeEach(() => {
    window.scrollTo = jest.fn();
    render(
        <MemoryRouter>
            <Store />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('store and search bar render', () => {
    const store = screen.getByTestId('store');
    const searchBar = screen.getByTestId('search');
    expect(store).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(searchBar).toHaveTextContent('Elige tu estilo');
    expect(searchBar).toHaveTextContent('Buscar');
    expect(searchBar).toHaveTextContent('No encuentras lo que necesitas?');
    expect(searchBar).toHaveTextContent('Personaliza tu prenda');
});

test('store filters and item render', () => {
    //Filters feat has been disabled until getting more items in the list
    const store = screen.getByTestId('store');
    //const filters = store.getElementsByClassName('filters-container');
    const itemCards = store.getElementsByClassName('item-card');
    expect(itemCards.length).toBeGreaterThan(0);
    //There are two Filter components, for pc and for mobile
    //expect(filters[0]).toBeInTheDocument();
    //expect(filters[1]).toBeInTheDocument();
});
