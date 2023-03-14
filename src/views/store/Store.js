import { useState } from 'react';
import Button from '../../components/button/Button';
import Filter from '../../components/filter/Filter';
import Item from '../../components/item/Item';
import Search from '../../components/search/Search';
import { items } from './../../resources/info/items';
import './Store.css';

const Store = () => {
    const [showFilters, setShowFilters] = useState(true);

    return (
        <div className="store" data-testid="store">
            <Search />
            <div className="filter-button text-end">
                <Button
                    text={showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
                    type="link"
                    action={() => setShowFilters(!showFilters)}
                />
            </div>
            <div className="row items-container">
                <div className={`col-3 ${!showFilters && 'd-none'}`}>
                    <Filter />
                </div>
                <div className={showFilters ? 'col-9' : 'col-12'}>
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
