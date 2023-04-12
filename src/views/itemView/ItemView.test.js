import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { buyProductText, primaryNumberURL } from '../../constants/texts';
import { items } from '../../resources/info/items/list';
import ItemView from './ItemView';

const getCompletedURL = () => {
    const buyProductURL = new URL(primaryNumberURL);
    const newBuyProductText = buyProductText
        .replace('$name', items[0].name)
        .replace('$color', items[0].imgs[0].color)
        .replace('$size', items[0].sizes[0])
        .replace('$fabric', items[0].fabrics[0]);
    buyProductURL.searchParams.set('text', newBuyProductText);

    return buyProductURL.toString();
};

beforeEach(() => {
    window.scrollTo = jest.fn();
    render(
        <MemoryRouter initialEntries={['/tienda/110']}>
            <Routes>
                <Route path="tienda/:itemId" element={<ItemView />}></Route>
            </Routes>
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('render all elements when an item is clicked', () => {
    const itemView = screen.getByTestId('item-view');
    const productTitle = itemView.getElementsByTagName('h4')[0];
    const productPrice = itemView.getElementsByTagName('h4')[1];
    const buyButton = screen.getByTestId('buy-link');
    const itemViewer = screen.getByTestId('item-viewer');
    const itemOptions = screen.getByTestId('item-options');
    expect(itemView).toBeInTheDocument();
    expect(productTitle).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(buyButton).toBeInTheDocument();
    expect(itemViewer).toBeInTheDocument();
    expect(itemOptions).toBeInTheDocument();
    expect(productTitle).toHaveTextContent(items[0].name);
    expect(productPrice).toHaveTextContent('$47.00');
    expect(buyButton).toHaveTextContent('Comprar');
    expect(buyButton).toHaveAttribute('href', getCompletedURL());
    expect(buyButton).toHaveAttribute('target', '_blank');
    expect(buyButton).toHaveAttribute('rel', 'noreferrer');
});
