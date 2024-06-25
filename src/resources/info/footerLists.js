import { address, locationURL } from '../../constants/texts';

export const footerLists = [
    {
        id: 'list-links',
        title: 'Links',
        links: [
            {
                id: 'fl-tienda',
                url: '/tienda',
                name: 'Tienda',
                local: true,
            },
            {
                id: 'fl-conocenos',
                url: '/conocenos',
                name: 'Conócenos',
                local: true,
            },
            {
                id: 'fl-contacto',
                url: '/contacto',
                name: 'Contacto',
                local: true,
            },
        ],
    },
    {
        id: 'list-redes',
        title: 'Redes',
        links: [
            {
                id: 'fl-facebook',
                url: 'https://www.facebook.com/people/MarcFashion/100054329988831/',
                name: 'Facebook',
            },
            {
                id: 'fl-instagram',
                url: 'https://www.instagram.com/imalexis97/',
                name: 'Instagram',
            },
            {
                id: 'fl-email',
                url: 'mailto:alexistoala@outlook.com',
                name: 'Email',
                local: true,
            },
            {
                id: 'fl-whatsapp',
                url: 'https://wa.me/593995487770',
                name: 'Whatsapp',
            },
        ],
    },
    {
        id: 'list-ubi',
        title: 'Ubicación',
        links: [
            {
                id: 'fl-ubicacion',
                url: locationURL,
                name: address,
            },
        ],
    },
];
