//import { collection, getDocs } from 'firebase/firestore';
//import db from './config';

//const productsRef = collection(db, 'products');

//export const getAllProducts = async () => {
//try {
//const querySnapshot = await getDocs(productsRef);
//if (querySnapshot.docs.length > 0) {
//return querySnapshot.docs.map((doc) => ({
//...doc.data(),
//id: doc.id,
//}));
//}
//} catch (error) {
//console.log('Error fetching products. Try reloading the page.');
//}
//};
