//TODO: Probably move this to the firebase storage along with the products
export const filters = [
    {
        id: 'fil_sex',
        title: 'Género',
        type: 'checkbox',
        options: [
            {
                id: 'opt_sex_man',
                value: 'Hombre',
            },
            {
                id: 'opt_sex_woman',
                value: 'Mujer',
            },
        ],
    },
    {
        id: 'fil_price',
        title: 'Precio',
        type: 'checkbox',
        options: [
            {
                id: 'opt_price_0_25',
                value: '$0-$25',
            },
            {
                id: 'opt_price_25_50',
                value: '$25-$50',
            },
            {
                id: 'opt_price_50_100',
                value: '$50-$100',
            },
            {
                id: 'opt_price_over_100',
                value: 'Más de 100',
            },
        ],
    },
    {
        id: 'fil_color',
        title: 'Color',
        type: 'color-checkbox',
        options: [
            {
                id: 'opt_color_1',
                value: '#0C0C0C',
                caption: 'Negro',
            },
            {
                id: 'opt_color_2',
                value: '#253861',
                caption: 'Azul Marino',
            },
            {
                id: 'opt_color_3',
                value: '#ADABAB',
                caption: 'Gris',
            },
            {
                id: 'opt_color_4',
                value: '#7F7F7F',
                caption: 'Plomo',
            },
            {
                id: 'opt_color_5',
                value: '#385392',
                caption: 'Azul Electrico',
            },
            {
                id: 'opt_color_6',
                value: '#B02418',
                caption: 'Vino',
            },
            {
                id: 'opt_color_7',
                value: '#FADF84',
                caption: 'Habano',
            },
        ],
    },
    {
        id: 'fil_size',
        title: 'Talla',
        type: 'checkbox',
        options: [
            {
                id: 'opt_size_sm',
                value: 'Small',
            },
            {
                id: 'opt_size_md',
                value: 'Medium',
            },
            {
                id: 'opt_size_lg',
                value: 'Large',
            },
            {
                id: 'opt_size_xl',
                value: 'XL',
            },
            {
                id: 'opt_size_xxl',
                value: 'XXL',
            },
            {
                id: 'opt_size_xxxl',
                value: 'XXXL',
            },
            {
                id: 'opt_size_xxxxl',
                value: 'XXXXL',
            },
        ],
    },
];
