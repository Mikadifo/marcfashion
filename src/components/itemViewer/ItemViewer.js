import { useEffect } from 'react';
import './ItemViewer.css';

const ItemViewer = ({ imgs, selectedColor }) => {
    useEffect(() => {
        console.log(selectedColor);
    }, [selectedColor]);
    return (
        <div
            id="itemCarousel"
            className="carousel slide item-viewer"
            data-bs-interval="false"
        >
            <div className="carousel-indicators">
                {imgs.map((img, i) => (
                    <button
                        type="button"
                        key={img.id}
                        data-bs-target="#itemCarousel"
                        data-bs-slide-to={i}
                        className={img.color === selectedColor ? 'active' : ''}
                        aria-current="true"
                        aria-label={`Slide ${i}`}
                    />
                ))}
            </div>
            <div className="carousel-inner">
                {imgs.map((img, i) => (
                    <div
                        className={`carousel-item ${
                            img.color === selectedColor && 'active'
                        }`}
                        key={img.id}
                    >
                        <img src={img.url} alt={`Product img ${i}`} />
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
