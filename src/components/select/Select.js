import { useEffect, useState } from 'react';
import { getColorsByIds } from '../../firebase/colorsController';
import './Select.css';

const Select = ({ title, options, value, setValue }) => {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        if (options[0].startsWith('color_')) {
            const data = getColorsByIds(options);
            setColors(data.colors);
        }
    }, []);

    return (
        <div className="text-start select-container">
            <label htmlFor="custom-select">{title}</label>
            <div className="select-options">
                <select
                    name="custom-select"
                    id="custom-select"
                    value={value}
                    onChange={({ target }) => setValue(target.value)}
                >
                    {options.map((option, i) =>
                        option.startsWith('color_') ? (
                            <option value={option} key={i}>
                                {colors[i] ? colors[i].name : 'loading'}
                            </option>
                        ) : (
                            <option value={option} key={i}>
                                {option}
                            </option>
                        ),
                    )}
                </select>
            </div>
        </div>
    );
};

export default Select;
