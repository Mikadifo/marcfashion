import './Select.css';

const Select = ({ title, options, value, setValue }) => {
    return (
        <div className="text-start select-container">
            <label htmlFor="custom-select">{title}</label>
            <div className="select-options">
                <select
                    name="custom-select"
                    id="custom-select"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    {options.map((option, i) => (
                        <option value={option} key={i}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Select;
