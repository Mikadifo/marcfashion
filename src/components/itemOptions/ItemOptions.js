import Select from '../select/Select';

const ItemOptions = ({ options }) => {
    console.log(options);
    return (
        <div>
            <Select title={'Tela'} options={options.fabrics} />
            <Select title={'Talla'} options={options.sizes} />
            <Select title={'Color'} options={options.colors} />
        </div>
    );
};

export default ItemOptions;
