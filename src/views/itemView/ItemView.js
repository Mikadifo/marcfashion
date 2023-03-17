import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/search/Search';
import ItemViewer from '../../components/itemViewer/ItemViewer';
import ItemOptions from '../../components/itemOptions/ItemOptions';
import { items as products } from './../../resources/info/items';
import { getDescriptionsByIds } from '../../firebase/descriptionsController';
import Description from '../../components/description/Description';
import './ItemView.css';

const ItemView = () => {
    const { itemId } = useParams();
    const [state, setState] = useState({
        loading: true,
        error: '',
        item: {},
        descriptions: [],
    });

    const getItemOptions = () => {
        return {
            sizes: state.item.sizes,
            colors: state.item.colors,
            fabrics: state.item.fabrics,
            category: state.item.category,
        };
    };

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
                            <div className="col-6">
                                <ItemViewer imgs={state.item.imgs} />
                            </div>
                            <div className="col-6">
                                <ItemOptions options={getItemOptions()} />
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
