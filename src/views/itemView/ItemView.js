import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './../../resources/info/items'; //TODO: NOT USE THIS, IT SHOULD COME FROM A FIREBASE QUERY to get byID

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
        <div>
            ITEM ({itemId}) PREVIEW: NAME:{item.name}
        </div>
    );
};

export default ItemView;
