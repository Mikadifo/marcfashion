import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './views/layout/Layout';
import Home from './views/home/Home';
import Store from './views/store/Store';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import ItemView from './views/itemView/ItemView';
import 'react-loading-skeleton/dist/skeleton.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="tienda" element={<Store />} />
                    <Route path="tienda/:itemId" element={<ItemView />} />
                    <Route path="conocenos" element={<About />} />
                    <Route path="contacto" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
