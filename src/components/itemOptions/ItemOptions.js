import { useEffect, useState } from 'react';
import Select from '../select/Select';
import './ItemOptions.css';

const ItemOptions = ({ options, setOptions }) => {
    const [fabric, setFabric] = useState(options.fabrics[0]);
    const [size, setSize] = useState(options.sizes[0]);
    const [color, setColor] = useState(options.colors[0]);

    useEffect(() => {
        setOptions({
            size,
            color,
            fabric,
        });
    }, [fabric, size, color]);

    return (
        <div className="select-options-container">
            <Select
                title={'Tela'}
                options={options.fabrics}
                value={fabric}
                setValue={setFabric}
            />
            <Select
                title={'Talla'}
                options={options.sizes}
                value={size}
                setValue={setSize}
            />
            <Select
                title={'Color'}
                options={options.colors}
                value={color}
                setValue={setColor}
            />
        </div>
    );
};

export default ItemOptions;
