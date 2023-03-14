import Button from '../button/Button';
import { filters } from './../../resources/info/filters';
import './Filter.css';

const Filter = () => {
    return (
        <div>
            <div className="filter-button">
                <Button text={'<< Ocultar filtros'} type="link" />
            </div>
            <div className="filters-container">
                {filters.map((filter) => (
                    <div key={filter.id}>
                        <h6>{filter.title}</h6>
                        <div className={filter.type !== 'checkbox' && 'row'}>
                            {filter.options.map((option) => (
                                <div
                                    className={
                                        filter.type !== 'checkbox' && 'col'
                                    }
                                >
                                    <input
                                        type="checkbox"
                                        id={option.id}
                                        name={option.id}
                                        value={option.value}
                                    />
                                    {filter.type === 'checkbox' && (
                                        <label htmlFor={option.id}>
                                            {option.value}
                                        </label>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
