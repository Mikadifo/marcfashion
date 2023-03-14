import { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import Filter from '../../components/filter/Filter';
import Item from '../../components/item/Item';
import Search from '../../components/search/Search';
import { items } from './../../resources/info/items';
import './Store.css';

const Store = () => {
    const [showFilters, setShowFilters] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const updateScreenSize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
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
                    modalTarget="#exampleModal"
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
                <div
                    className={`${showFilters ? 'col-12 col-lg-9' : 'col-12'}`}
                >
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
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <Button text="Aplicar" type="button" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Store;
