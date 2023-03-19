import { useState } from 'react';
import { customizedProductURL } from '../../constants/texts';
import { searchProduct } from '../../firebase/productsController';
import Button from './../button/Button';
import './Search.css';

const Search = ({ setItems }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (evt) => {
        evt.preventDefault();
        setItems(searchProduct(searchValue));
    };

    return (
        <div className="search text-center" data-testid="search">
            <h3>Elige tu estilo</h3>
            <form className="row search-bar" onSubmit={handleSearch}>
                <div className="col-12 col-md-10">
                    <input
                        type="search"
                        placeholder="Buscar"
                        aria-label="Search"
                        value={searchValue}
                        onChange={({ target }) => setSearchValue(target.value)}
                    />
                </div>
                <div className="col-2 d-none d-md-flex">
                    <Button text={'Buscar'} type="button" isSubmit={true} />
                </div>
            </form>
            <div className="text-start d-flex search-caption">
                <p className="my-auto d-none d-sm-flex">
                    ¿No encuentras lo que necesitas?
                </p>
                <a href={customizedProductURL} target="_blank" rel="noreferrer">
                    <Button text={'Personaliza tu prenda'} type="link" />
                </a>
            </div>
        </div>
    );
};

export default Search;
