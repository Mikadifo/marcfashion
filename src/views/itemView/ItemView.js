import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/search/Search';
import ItemViewer from '../../components/itemViewer/ItemViewer';
import ItemOptions from '../../components/itemOptions/ItemOptions';
import { items as products } from './../../resources/info/items';
import './ItemView.css';
import { getDescriptionsByIds } from '../../firebase/descriptionsController';

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
                    <div>
                        <ItemViewer imgs={state.item.imgs} />
                        <ItemOptions options={getItemOptions()} />
                    </div>
                ) : (
                    <h1>{state.error}</h1>
                )}
            </div>
            <hr />
            <div className="item-description">
                {state.loading && <h1>Cargando Detalle...</h1>}
                {!state.loading &&
                    state.error.length === 0 &&
                    state.descriptions.length < state.item.description.length &&
                    state.descriptions.length > 0 && (
                        <p>
                            *No se encontraron todas las descripciones. Intenta
                            recargar la pagina.
                        </p>
                    )}
                {state.descriptions.length === 0 ? (
                    <h1>Hubo un error al cargar los detalles del producto.</h1>
                ) : (
                    state.descriptions.map((section, i) => (
                        <div key={section.id}>
                            <h5>{section.title}</h5>
                            {section.type === 'list' ? (
                                <ol>
                                    {section.content.map((listItem, j) => (
                                        <li className="mb-0" key={j}>
                                            <p
                                                className={
                                                    j ===
                                                    section.content.length - 1
                                                        ? ''
                                                        : 'mb-3'
                                                }
                                            >
                                                {listItem}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            ) : (
                                <p
                                    className={
                                        i === state.descriptions.length - 1
                                            ? 'mb-0'
                                            : ''
                                    }
                                >
                                    {section.content}
                                </p>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ItemView;
