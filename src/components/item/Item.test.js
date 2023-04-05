import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Item from './Item';

let itemPrice = 47;
let mockItem = {};

beforeEach(() => {
    mockItem = {
        id: '110',
        name: 'CHAQUETA CORDUROY',
        category: 'CHAQUETAS',
        colors: [
            'color_1',
            'color_2',
            'color_3',
            'color_4',
            'color_5',
            'color_6',
            'color_7',
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', '46', '48', '50'],
        imgs: [
            {
                id: 'img_model_black',
                url: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                color: 'color_1',
            },
        ],
        fabrics: ['Nacional', 'Importada'],
        description: [
            'desc_general',
            'desc_buy_steps',
            'desc_custom_and_questions',
            'desc_prices',
            'desc_durability',
            'desc_instructions',
        ],
    };
    window.scrollTo = jest.fn();
    render(
        <MemoryRouter>
            <Item info={mockItem} />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('item render', () => {
    const itemCard = screen.getByTestId('item-card');
    const img = itemCard.getElementsByTagName('img')[0];
    const paragraph = itemCard.getElementsByTagName('p')[0];
    const h5 = itemCard.getElementsByTagName('h5')[0];
    expect(itemCard).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', mockItem.imgs[0].url);
    expect(img).toHaveAttribute('alt', mockItem.name);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(mockItem.name);
    expect(h5).toHaveTextContent('$' + itemPrice.toFixed(2));
});
