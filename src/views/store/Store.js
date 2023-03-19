//Many comments are because the filter feat was disabled, too few items
//import { useEffect, useState } from 'react';
//import Button from '../../components/button/Button';
//import Filter from '../../components/filter/Filter';
import { useState } from 'react';
import Item from '../../components/item/Item';
import Search from '../../components/search/Search';
import { items } from './../../resources/info/items';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState(items);
    //const [showFilters, setShowFilters] = useState(true);
    //const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    //const updateScreenSize = () => {
    //setScreenWidth(window.innerWidth);
    //};

    //useEffect(() => {
    //window.addEventListener('resize', updateScreenSize);
    //return () => {
    //window.removeEventListener('resize', updateScreenSize);
    //};
    //}, []);

    return (
        <div className="store" data-testid="store">
            <Search setItems={setProducts} />
            {/* This feat is disabled, to few items
            <div className="filter-button text-end">
                <Button
                    text={
                        showFilters && screenWidth >= 992
                            ? 'Ocultar filtros'
                            : 'Mostrar filtros'
                    }
                    type="link"
                    action={() => setShowFilters(!showFilters)}
                    modalToggle={screenWidth < 992}
                    modalTarget="#filter-modal"
                />
            </div>
		*/}
            <div className="row items-container">
                {/* This feat is disabled, to few items
                <div
                    className={`col-3 ${
                        !showFilters ? 'd-none' : 'd-none d-lg-flex'
                    }`}
                >
                    <Filter />
                </div>
                <div className={showFilters ? 'col-12 col-lg-9' : 'col-12'}>
		Replace with the next div
		*/}
                <div className="col-12 mt-5">
                    <div className="row">
                        {products.length === 0 && (
                            <h1>No se encontro resultados</h1>
                        )}
                        {products.map((product) => (
                            <div
                                className="col-xxl-auto col item-list"
                                key={product.id}
                            >
                                <Item info={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* This feat is disabled, to few items
            <div
                className="modal fade"
                id="filter-modal"
                tabIndex="-1"
                aria-labelledby="filter-modal-label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Filtros</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <Filter />
                        </div>
                        <div className="modal-footer">
                            <Button
                                text="Aplicar"
                                type="button"
                                modalCloser={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
	    */}
        </div>
    );
};

export default Store;
