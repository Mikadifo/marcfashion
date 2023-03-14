import Button from '../button/Button';
import './Filter.css';

const Filter = () => {
    return (
        <div>
            <div className="filter-button">
                <Button text={'<< Ocultar filtros'} type="link" />
            </div>
            <div className="filters-container">BOXBG</div>
        </div>
    );
};

export default Filter;
