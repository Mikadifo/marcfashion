import { prices } from './../resources/info/prices';

export const getPriceByOptions = (options) => {
    const data = prices.filter(
        (price) =>
            price.category === options.category &&
            price.sizes.includes(options.size),
    );
    if (data.length === 0) {
        return {
            price: 0,
            error: 'No se encuentra el precio con estas opciones.',
        };
    }
    if (
        !Object.keys(data[0]).includes(`value_${options.fabric.toLowerCase()}`)
    ) {
        return {
            price: 0,
            error: 'No se encuentra el tipo de tela seleccionado.',
        };
    }
    return {
        price: data[0][`value_${options.fabric.toLowerCase()}`],
        error: '',
    };
};
