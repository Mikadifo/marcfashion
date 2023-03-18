import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/search/Search';
import ItemViewer from '../../components/itemViewer/ItemViewer';
import ItemOptions from '../../components/itemOptions/ItemOptions';
import { items as products } from './../../resources/info/items';
import { getDescriptionsByIds } from '../../firebase/descriptionsController';
import Description from '../../components/description/Description';
import Button from '../../components/button/Button';
import { getPriceByOptions } from '../../firebase/priceController';
import './ItemView.css';

const ItemView = () => {
    const { itemId } = useParams();
    const [state, setState] = useState({
        loading: true,
        error: '',
        item: {},
        descriptions: [],
        price: 0,
    });
    const [selectedOptions, setSelectedOptions] = useState({});

    const getItemOptions = () => {
        return {
            sizes: state.item.sizes,
            colors: state.item.colors,
            fabrics: state.item.fabrics,
        };
    };

    useEffect(() => {
        if (Object.keys(selectedOptions).length !== 0) {
            console.log('Getting Price');
            const result = getPriceByOptions({
                ...selectedOptions,
                category: state.item.category,
            });
            setState((old) => ({
                ...old,
                price: result.price,
            }));
        }
    }, [selectedOptions, state.item.category]);

    useEffect(() => {
        const getItem = () => {
            console.log('Getting item...');
            //THIS WOULD BE EXPORTED AS A DB QUERY WHEN THE LIST OF LOCAL ITEMS GETS TO LARGE
            const product = products.filter((element) => element.id === itemId);
            if (product.length === 0) {
                setState({
                    loading: false,
                    error: 'El producto no se ha encontrado',
                    item: {},
                    descriptions: {},
                });
            } else {
                setState({
                    loading: false,
                    error: '',
                    item: product[0],
                    descriptions: getDescriptionsByIds(product[0].description),
                });
            }
        };
        getItem();
    }, [itemId]);

    return (
        <div className="item-view" data-testid="item-view">
            <Search />
            <div className="item-info">
                {state.loading && <h1>Cargando Producto...</h1>}
                {!state.loading && state.error.length === 0 ? (
                    <div className="text-center">
                        <h4>{state.item.name}</h4>
                        <div className="row">
                            <div className="col-lg-7 col-xl-6 col-xxl-6 d-flex justify-content-center mb-5 mb-lg-0">
                                <ItemViewer imgs={state.item.imgs} />
                            </div>
                            <div className="col-lg-5 col-xl-6 col-xxl-4 ps-lg-5 ps-xxl-0">
                                <ItemOptions
                                    options={getItemOptions()}
                                    setOptions={setSelectedOptions}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="row pt-5">
                                <div className="col-12 col-sm-8 col-lg-10 text-center text-sm-end my-auto">
                                    <h4 className="mb-3 m-sm-0">
                                        {state.price === 0 || !state.price
                                            ? '--'
                                            : '$' + state.price.toFixed(2)}
                                    </h4>
                                </div>
                                <div className="col-12 col-sm-4 col-lg-2 text-center">
                                    <Button text="Comprar" type="button" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>{state.error}</h1>
                )}
            </div>
            <hr />
            {state.loading && <h1>Cargando Detalle...</h1>}
            {!state.loading && state.error.length === 0 && (
                <Description
                    descriptions={state.descriptions}
                    itemDescriptions={state.item.description.length}
                />
            )}
        </div>
    );
};

export default ItemView;
