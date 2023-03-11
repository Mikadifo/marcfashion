import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './views/layout/Layout';
import Home from './views/home/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/**
                    <Route path="terapias" element={<Therapies />} />
		    **/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
