import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

//TODO: Take the price from lowest price
const Item = ({ info }) => {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className={`${hover && 'item-card-hover'} item-card mx-auto`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseUp={() => setHover(false)}
            onClick={() => navigate(`/tienda/${info.id}`)}
            data-testid={info.id}
        >
            <img src={info.imgs[0]} alt={info.name} />
            <p>{info.name}</p>
            <h5>TODO$</h5>
        </div>
    );
};

export default Item;
