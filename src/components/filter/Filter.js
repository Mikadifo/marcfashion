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
                        <div
                            className={`options-container ${
                                filter.type !== 'checkbox' && 'row'
                            }`}
                        >
                            {filter.options.map((option) =>
                                filter.type === 'checkbox' ? (
                                    <label htmlFor={option.id} key={option.id}>
                                        <input
                                            className={filter.type}
                                            type="checkbox"
                                            id={option.id}
                                            name={option.id}
                                            value={option.value}
                                        />
                                        {option.value}
                                    </label>
                                ) : (
                                    <div className="col" key={option.id}>
                                        <input
                                            className={filter.type}
                                            style={{
                                                backgroundColor: option.value,
                                            }}
                                            type="checkbox"
                                            id={option.id}
                                            name={option.caption}
                                            value={option.caption}
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
