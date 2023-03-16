import { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import Filter from '../../components/filter/Filter';
import Item from '../../components/item/Item';
import Search from '../../components/search/Search';
import { getAllProductNames } from '../../firebase/productsController';
import './Store.css';

const Store = () => {
    const [showFilters, setShowFilters] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [products, setProducts] = useState([]);

    const updateScreenSize = () => {
        setScreenWidth(window.innerWidth);
    };

    const getProducts = async () => {
        console.log('Fetching Products...');
        setProducts(await getAllProductNames());
        console.log(products);
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
        getProducts();
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    return (
        <div className="store" data-testid="store">
            <Search />
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
            <div className="row items-container">
                <div
                    className={`col-3 ${
                        !showFilters ? 'd-none' : 'd-none d-lg-flex'
                    }`}
                >
                    <Filter />
                </div>
                <div className={showFilters ? 'col-12 col-lg-9' : 'col-12'}>
                    <div className="row">
                        {products.length === 0 ? (
                            <h1>Cargando Productos...</h1>
                        ) : (
                            products.map((product) => (
                                <div
                                    className="col-xxl-auto col item-list"
                                    key={product.id}
                                >
                                    <Item info={product} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default Store;
