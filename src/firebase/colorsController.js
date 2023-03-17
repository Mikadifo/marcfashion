import { colors } from './../resources/info/colors';

export const getColorsByIds = (ids) => {
    const result = colors.filter((color) => ids.includes(color.id));
    if (result.length === 0) {
        return { colors: [], error: 'No se encuentra colores' };
    }

    return { colors: result, error: '' };
};
