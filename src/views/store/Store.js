import Search from '../../components/search/Search';
import './Store.css';

const Store = () => {
    return (
        <div className="store" data-testid="store">
            <Search />
            <div className="row items-container">
                <div className="col">FILTERS</div>
                <div className="col">ITEMS</div>
            </div>
        </div>
    );
};

export default Store;
