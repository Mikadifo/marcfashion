import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { filters } from './../../resources/info/filters';
import Filter from './Filter';

beforeEach(() => {
    window.scrollTo = jest.fn();
    render(
        <MemoryRouter>
            <Filter />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('filter render options', () => {
    const filtersContainer = screen.getByTestId('filters-container');
    expect(filtersContainer).toBeInTheDocument();
    filters.forEach((filter, i) => {
        const optionsContainer =
            filtersContainer.getElementsByClassName('options-container')[i];
        const title = filtersContainer.getElementsByTagName('h6')[i];
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(filter.title);
        expect(optionsContainer).toBeInTheDocument();
        filter.options.forEach((option, j) => {
            if (filter.type === 'checkbox') {
                const label = optionsContainer.getElementsByTagName('label')[j];
                const checkbox = label.getElementsByTagName('input')[0];
                expect(label).toBeInTheDocument();
                expect(label).toHaveTextContent(option.value);
                expect(checkbox).toBeInTheDocument();
                expect(checkbox).toHaveClass('checkbox');
                expect(checkbox).not.toBeChecked();
            } else {
                const colorCheckbox =
                    optionsContainer.getElementsByTagName('input')[j];
                expect(colorCheckbox).toBeInTheDocument();
                expect(colorCheckbox).toHaveClass('color-checkbox');
                expect(colorCheckbox).toHaveStyle({
                    backgroundColor: option.value,
                });
            }
        });
    });
});
