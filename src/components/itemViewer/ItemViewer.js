import './ItemViewer.css';

const ItemViewer = ({ imgs }) => {
    return (
        <div
            id="itemCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                {imgs.map((img, i) => (
                    <button
                        type="button"
                        key={i}
                        data-bs-target="#itemCarousel"
                        data-bs-slide-to={i}
                        className={i === 0 ? 'active' : ''}
                        aria-current="true"
                        aria-label={`Slide ${i}`}
                    />
                ))}
            </div>
            <div className="carousel-inner">
                {imgs.map((img, i) => (
                    <div
                        className={`carousel-item ${i === 0 && 'active'}`}
                        key={i}
                    >
                        <img
                            src={img}
                            className="d-block w-100"
                            alt={`Product img ${i}`}
                        />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#itemCarousel"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#itemCarousel"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
};

export default ItemViewer;
