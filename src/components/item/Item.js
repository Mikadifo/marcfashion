import './Item.css';

const Item = ({ info }) => {
    return (
        <div className="item-card">
            <img src={info.img} alt={info.name} />
            <p>{info.name}</p>
            <h5>{info.price}</h5>
        </div>
    );
};

export default Item;
