import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { items } from './../../resources/info/items';
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

test('store filters render', () => {
    const store = screen.getByTestId('store');
    const filters = store.getElementsByClassName('filters-container');
    //There are two Filter components, for pc and for mobile
    expect(filters[0]).toBeInTheDocument();
    expect(filters[1]).toBeInTheDocument();
    items.forEach((item) => {
        const itemList = screen.getByTestId(item.id);
        const itemImg = itemList.getElementsByTagName('img')[0];
        expect(itemList).toBeInTheDocument();
        expect(itemImg).toBeInTheDocument();
        expect(itemList).toHaveTextContent(item.name);
        expect(itemList).toHaveTextContent(item.price);
        expect(itemImg).toHaveAttribute('src', item.img);
    });
});
