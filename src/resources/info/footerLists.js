import { address } from '../../constants/texts';

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
                url: 'https://www.instagram.com/alexistoala/',
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
                url: "https://www.google.com/maps/place/1%C2%B014'33.4%22S+78%C2%B040'32.5%22W/@-1.2427849,-78.6763546,18.59z/data=!4m4!3m3!8m2!3d-1.2426025!4d-78.6756877?hl=en-US",
                name: address,
            },
        ],
    },
];
