import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/search/Search';
import { items } from './../../resources/info/items'; //TODO: NOT USE THIS, IT SHOULD COME FROM A FIREBASE QUERY to get byID
import './ItemView.css';

const ItemView = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    //TODO: THIS SHOULD GET ITEM FROM A QUERY
    const getItem = () => {
        console.log('Getting item...');
        setItem(items.filter((element) => element.id === itemId)[0]);
    };

    useEffect(() => {
        console.log('Use effect');
        getItem();
    }, []);

    return (
        <div className="item-view" data-testid="item-view">
            <Search />
            <div className="item-info">
                ITEM ({itemId}) PREVIEW: NAME:{item.name}
            </div>
            <hr />
            <div className="item-descprition">Descprition</div>
        </div>
    );
};

export default ItemView;
