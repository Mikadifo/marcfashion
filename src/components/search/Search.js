import Button from './../button/Button';
import './Search.css';

const Search = () => {
    return (
        <div className="search text-center">
            <h3>Elige tu estilo</h3>
            <form className="row search-bar">
                <div className="col-12 col-md-10">
                    <input
                        type="search"
                        placeholder="Buscar"
                        aria-label="Search"
                    />
                </div>
                <div className="col-2 d-none d-md-flex">
                    <Button text={'Buscar'} type="button" />
                </div>
            </form>
            <div className="text-start d-flex search-caption">
                <p className="my-auto d-none d-sm-flex">
                    No encuentras lo que necesitas?
                </p>
                <Button text={'Personaliza tu prenda'} type="link" />
            </div>
        </div>
    );
};

export default Search;
