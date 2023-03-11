import { useState } from 'react';
import './Button.css';

const Button = ({ text, style }) => {
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
            className={`main-${style} ${hover && `${style}-hover`} ${
                active && `${style}-active`
            }`}
        >
            {text}
        </button>
    );
};

export default Button;
