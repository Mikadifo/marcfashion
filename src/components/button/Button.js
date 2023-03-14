import { useState } from 'react';
import './Button.css';

const Button = ({ text, type, action }) => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    const handleMouseOut = () => {
        setHover(false);
        setActive(false);
    };

    return (
        <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={handleMouseOut}
            onMouseDown={() => setActive(true)}
            onMouseUp={handleMouseOut}
            onClick={action}
            className={`main-${type} ${hover && `${type}-hover`} ${
                active && `${type}-active`
            }`}
        >
            {text}
        </button>
    );
};

export default Button;
