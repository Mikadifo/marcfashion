import { collection, getDocs, query, where } from 'firebase/firestore';
import db from './config';

const productsRef = collection(db, 'products');

//const q = query(productsRef, where());

export const getAllProducts = async () => {
    try {
	const querySnapshot = await getDocs(productsRef);
        if (querySnapshot.docs.length > 0) {
            return querySnapshot.docs.map((doc) => doc.data());
        }
    } catch (error) {
        console.log('Error fetching products. Try reloading the page.');
        /* handle error */
    }
};
