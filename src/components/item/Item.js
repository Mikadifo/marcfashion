import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPriceByOptions } from '../../firebase/priceController';
import './Item.css';

const Item = ({ info }) => {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const price = getPriceByOptions({
        size: info.sizes[0],
        category: info.category,
        fabric: 'Nacional',
    }).price;

    return (
        <div
            className={`${hover && 'item-card-hover'} item-card mx-auto`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseUp={() => setHover(false)}
            onClick={() => navigate(`/tienda/${info.id}`)}
            data-testid="item-card"
        >
            <img
                src={info.imgs[0].url}
                alt={info.name}
                loading="lazy"
                decoding="async"
            />
            <p>{info.name}</p>
            <h5>{price === 0 || !price ? '--' : '$' + price.toFixed(2)}</h5>
        </div>
    );
};

export default Item;
