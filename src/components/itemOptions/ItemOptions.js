import Select from '../select/Select';
import './ItemOptions.css';

const ItemOptions = ({ options }) => {
    console.log(options);
    return (
        <div className="select-options-container">
            <Select title={'Tela'} options={options.fabrics} />
            <Select title={'Talla'} options={options.sizes} />
            <Select title={'Color'} options={options.colors} />
        </div>
    );
};

export default ItemOptions;
