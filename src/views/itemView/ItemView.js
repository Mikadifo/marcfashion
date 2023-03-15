import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/search/Search';
import { items } from './../../resources/info/items'; //TODO: NOT USE THIS, IT SHOULD COME FROM A FIREBASE QUERY to get byID
import './ItemView.css';

const ItemView = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        //TODO: THIS SHOULD GET ITEM FROM A QUERY
        const getItem = () => {
            console.log('Getting item...');
            setItem(items.filter((element) => element.id === itemId)[0]);
        };
        console.log('Use effect');
        getItem();
    }, [itemId]);

    const itemIsEmpty = () => !item || Object.keys(item).length === 0;

    return (
        <div className="item-view" data-testid="item-view">
            <Search />
            <div className="item-info">
                {itemIsEmpty() ? (
                    <h1>Cargando Producto...</h1>
                ) : (
                    <>
                        ITEM ({itemId}) PREVIEW: NAME:{item.name}
                    </>
                )}
            </div>
            <hr />
            <div className="item-descprition">
                {itemIsEmpty() || !item.descprition ? (
                    <h1>Cargando Producto...</h1>
                ) : (
                    item.descprition.map((section, i) => (
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
                                        i === item.descprition.length - 1
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
