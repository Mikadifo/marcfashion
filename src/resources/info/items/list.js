//Export this list to firebase storage when the list gets to large, whit the same structure

import { pantsImgs } from './pants_imgs';
import { suitsImgs } from './suits_imgs';

//CORDUROY JACKETS
//negro -> color_1
//azul marino -> color_2
//gris -> color_3
//plomo -> color_4
//azul electrico -> color_5
//vino -> color_6
//habano -> color_7

//SQUARED JACKETS
//negro -> color_1
//azul marino -> color_2
//gris -> color_3
//plomo -> color_4
//azul electrico -> color_5
//vino -> color_6
//habano -> color_7

//PANA JACKETS
//negro -> color_1
//azul marino -> color_2
//gris -> color_3
//plomo -> color_4
//azul electrico -> color_5
//vino -> color_6
//habano -> color_7

/* If and item img doesn't not have the color option,
 * it's because this color is already in the list.
 * This is to avoid errors when selecting a color
 */
export const items = [
    {
        id: '110',
        name: 'CHAQUETA CORDUROY',
        category: 'CHAQUETAS',
        colors: [
            'color_1',
            'color_2',
            'color_3',
            'color_4',
            'color_5',
            'color_6',
            'color_7',
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', '46', '48', '50'],
        imgs: [
            {
                id: 'img_model_black',
                url: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                color: 'color_1',
            },
            {
                id: 'img_model_blue',
                url: 'https://images.unsplash.com/photo-1548454782-15b189d129ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
                color: 'color_2',
            },
        ],
        fabrics: ['Nacional', 'Importada'],
        description: [
            'desc_general',
            'desc_buy_steps',
            'desc_custom_and_questions',
            'desc_prices',
            'desc_durability',
            'desc_instructions',
        ],
    },
    {
        id: '220',
        name: 'CHAQUETA HOMBRE CUADROS',
        category: 'CHAQUETAS',
        colors: [
            'color_1',
            'color_2',
            'color_3',
            'color_4',
            'color_5',
            'color_6',
            'color_7',
        ],
        sizes: ['S', 'M', 'L', 'XL', '46', '48', '50'],
        imgs: [
            {
                id: 'img_model_black',
                url: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                color: 'color_1',
            },
            {
                id: 'img_model_blue',
                url: 'https://images.unsplash.com/photo-1548454782-15b189d129ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
                color: 'color_2',
            },
        ],
        fabrics: ['Nacional', 'Importada'],
        description: [
            'desc_general',
            'desc_buy_steps',
            'desc_custom_and_questions',
            'desc_prices',
            'desc_durability',
            'desc_instructions',
        ],
    },
    {
        id: '330',
        name: 'CHAQUETA PANA',
        category: 'CHAQUETAS',
        colors: [
            'color_1',
            'color_2',
            'color_3',
            'color_4',
            'color_5',
            'color_6',
            'color_7',
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', '46', '48', '50'],
        imgs: [
            {
                id: 'img_model_black',
                url: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                color: 'color_1',
            },
            {
                id: 'img_model_blue',
                url: 'https://images.unsplash.com/photo-1548454782-15b189d129ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
                color: 'color_2',
            },
        ],
        fabrics: ['Nacional', 'Importada'],
        description: [
            'desc_general',
            'desc_buy_steps',
            'desc_custom_and_questions',
            'desc_prices',
            'desc_durability',
            'desc_instructions',
        ],
    },
    {
        id: '440',
        name: 'PANTALON HOMBRE',
        category: 'PANTALONES',
        colors: [
            'color_1',
            'color_2',
            'color_3',
            'color_4',
            'color_5',
            'color_6',
            'color_7',
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        imgs: pantsImgs,

        fabrics: ['Nacional', 'Importada'],
        description: [
            'desc_general',
            'desc_buy_steps',
            'desc_custom_and_questions',
            'desc_prices',
            'desc_durability',
            'desc_composition',
            'desc_instructions',
        ],
    },
    {
        id: '550',
        name: 'TERNO HOMBRE CASIMIR',
        category: 'TERNOS',
        colors: [
            'color_1',
            'color_2',
            'color_3',
            'color_4',
            'color_5',
            'color_6',
            'color_7',
        ],
        sizes: ['S', 'M', 'L', 'XL', '46', '48'],
        imgs: suitsImgs,
        fabrics: ['Nacional', 'Importada'],
        description: [
            'desc_general',
            'desc_buy_steps',
            'desc_custom_and_questions',
            'desc_prices',
            'desc_durability',
            'desc_composition',
            'desc_instructions',
        ],
    },
];
