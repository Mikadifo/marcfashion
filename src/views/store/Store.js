import Button from '../../components/button/Button';
import Filter from '../../components/filter/Filter';
import Search from '../../components/search/Search';
import './Store.css';

const Store = () => {
    return (
        <div className="store" data-testid="store">
            <Search />
            <div className="filter-button text-ed">
                <Button text={'Ocultar filtros'} type="link" />
            </div>
            <div className="row items-container">
                <div className="col-3">
                    <Filter />
                </div>
                <div className="col-9">ITEMS</div>
            </div>
        </div>
    );
};

export default Store;
