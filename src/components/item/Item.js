import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPriceByOptions } from '../../firebase/priceController';
import './Item.css';

const Item = ({ info }) => {
    const [hover, setHover] = useState(false);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const getItemPrice = () => {
            const result = getPriceByOptions({
                size: info.sizes[0],
                category: info.category,
                fabric: 'Nacional',
            });
            setPrice(result.price);
        };
        getItemPrice();
    }, [info]);

    return (
        <div
            className={`${hover && 'item-card-hover'} item-card mx-auto`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseUp={() => setHover(false)}
            onClick={() => navigate(`/tienda/${info.id}`)}
        >
            <img src={info.imgs[0]} alt={info.name} />
            <p>{info.name}</p>
            <h5>{price === 0 || !price ? '--' : '$' + price.toFixed(2)}</h5>
        </div>
    );
};

export default Item;
