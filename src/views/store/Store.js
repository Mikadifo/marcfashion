import Button from '../../components/button/Button';
import Filter from '../../components/filter/Filter';
import Item from '../../components/item/Item';
import Search from '../../components/search/Search';
import { items } from './../../resources/info/items';
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
                <div className="col-9">
                    <div className="row">
                        {items.map((item) => (
                            <div
                                className="col-xxl-auto col item-list"
                                key={item.id}
                            >
                                <Item info={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Store;
