import { useState } from 'react';
import './Button.css';

const Button = ({
    text,
    type,
    isSubmit,
    action,
    modalToggle,
    modalTarget,
    modalCloser,
}) => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    const handleMouseOut = () => {
        setHover(false);
        setActive(false);
    };

    return (
        <button
            data-bs-toggle={modalToggle && 'modal'}
            data-bs-dismiss={modalCloser && 'modal'}
            data-bs-target={modalTarget}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={handleMouseOut}
            onMouseDown={() => setActive(true)}
            onMouseUp={handleMouseOut}
            type={isSubmit && 'submit'}
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
