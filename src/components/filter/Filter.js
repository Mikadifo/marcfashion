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
                        {filter.options.map((option) => (
                            <div key={option.id}>
                                {option.type === 'checkbox' ? (
                                    <div>
                                        <input
                                            type="checkbox"
                                            id={option.id}
                                            name={option.id}
                                            value={option.value}
                                        />
                                        <label htmlFor={option.id}>
                                            {option.value}
                                        </label>
                                    </div>
                                ) : (
                                    'COLORS HERE'
                                )}
                                {/*TODO: add a custom check color component*/}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
