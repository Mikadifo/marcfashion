import { useState } from 'react';
import './Button.css';

const Button = ({ text }) => {
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
            className={`main-button ${hover && 'button-hover'} ${
                active && 'button-active'
            }`}
        >
            {text}
        </button>
    );
};

export default Button;
