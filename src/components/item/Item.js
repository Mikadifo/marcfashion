import { useState } from 'react';
import './Item.css';

const Item = ({ info }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`${hover && 'item-card-hover'} item-card`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseUp={() => setHover(false)}
        >
            <img src={info.img} alt={info.name} />
            <p>{info.name}</p>
            <h5>{info.price}</h5>
        </div>
    );
};

export default Item;
