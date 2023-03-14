//TODO: Probably move this to the firebase storage along with the products
export const filters = [
    {
        id: 'fil_sex',
        title: 'Género',
        options: [
            {
                id: 'opt_sex_man',
                type: 'checkbox',
                value: 'Hombre',
            },
            {
                id: 'opt_sex_woman',
                type: 'checkbox',
                value: 'Mujer',
            },
        ],
    },
    {
        id: 'fil_price',
        title: 'Precio',
        options: [
            {
                id: 'opt_price_0_25',
                type: 'checkbox',
                value: '$0-$25',
            },
            {
                id: 'opt_price_25_50',
                type: 'checkbox',
                value: '$25-$50',
            },
            {
                id: 'opt_price_50_100',
                type: 'checkbox',
                value: '$50-$100',
            },
            {
                id: 'opt_price_over_100',
                type: 'checkbox',
                value: 'Más de 100',
            },
        ],
    },
    {
        id: 'fil_color',
        title: 'Color',
        options: [
            {
                id: 'opt_color_1',
                type: 'color-checkbox',
                value: '#0C0C0C',
                caption: 'Negro',
            },
            {
                id: 'opt_color_2',
                type: 'color-checkbox',
                value: '#253861',
                caption: 'Azul Marino',
            },
            {
                id: 'opt_color_3',
                type: 'color-checkbox',
                value: '#ADABAB',
                caption: 'Gris',
            },
            {
                id: 'opt_color_4',
                type: 'color-checkbox',
                value: '#7F7F7F',
                caption: 'Plomo',
            },
            {
                id: 'opt_color_5',
                type: 'color-checkbox',
                value: '#385392',
                caption: 'Azul Electrico',
            },
            {
                id: 'opt_color_6',
                type: 'color-checkbox',
                value: '#B02418',
                caption: 'Vino',
            },
            {
                id: 'opt_color_7',
                type: 'color-checkbox',
                value: '#FADF84',
                caption: 'Habano',
            },
        ],
    },
    {
        id: 'fil_size',
        title: 'Talla',
        options: [
            {
                id: 'opt_size_sm',
                type: 'checkbox',
                value: 'Small',
            },
            {
                id: 'opt_size_md',
                type: 'checkbox',
                value: 'Medium',
            },
            {
                id: 'opt_size_lg',
                type: 'checkbox',
                value: 'Large',
            },
            {
                id: 'opt_size_xl',
                type: 'checkbox',
                value: 'XL',
            },
            {
                id: 'opt_size_xxl',
                type: 'checkbox',
                value: 'XXL',
            },
            {
                id: 'opt_size_xxxl',
                type: 'checkbox',
                value: 'XXXL',
            },
            {
                id: 'opt_size_xxxxl',
                type: 'checkbox',
                value: 'XXXXL',
            },
        ],
    },
];
