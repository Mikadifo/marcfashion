import './Select.css';

const Select = ({ title, options }) => {
    return (
        <div className="text-start select-container">
            <label htmlFor="fabric">{title}</label>
            <div className="select-options">
                <select name="fabric" id="fabric">
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
