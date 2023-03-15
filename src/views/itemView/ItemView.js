import { useParams } from 'react-router-dom';

const ItemView = () => {
    const { itemId } = useParams();

    return <div>ITEM ({itemId}) PREVIEW</div>;
};

export default ItemView;
