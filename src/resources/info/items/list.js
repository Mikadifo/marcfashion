//Export this list to firebase storage when the list gets to large, whit the same structure

import { pantsImgs } from './pants_imgs';
import { suitsImgs } from './suits_imgs';
import { corduroyJacketsImgs } from './corduroy_jackets_imgs';
import { panaJacketsImgs } from './pana_jackets_imgs';
import { squareJacketsImgs } from './square_jackets_imgs';

/* If and item img doesn't not have the color option,
 * it's because this color is already in the list.
 * This is to avoid errors when selecting a color
 */
export const items = [
    {
        id: '110',
        name: 'CHAQUETAS DE CORDUROY',
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
        imgs: corduroyJacketsImgs,
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
        name: 'CHAQUETA DE CUADROS PARA HOMBRE',
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
        imgs: squareJacketsImgs,
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
        name: 'CHAQUETA DE PANA',
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
        imgs: panaJacketsImgs,
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
        name: 'PANTALÓN PARA HOMBRE',
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
        name: 'TERNO DE CASIMIR PARA HOMBRE',
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
