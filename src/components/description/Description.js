import './Description.css';

const Description = ({ descriptions, itemDescriptions }) => {
    return (
        <div className="item-description">
            {descriptions.length > 0 &&
                descriptions.length < itemDescriptions && (
                    <p>
                        *No se encontraron todas las descripciones. Intenta
                        recargar la pagina.
                    </p>
                )}
            {descriptions.length === 0 ? (
                <h1>Hubo un error al cargar los detalles del producto.</h1>
            ) : (
                descriptions.map((section, i) => (
                    <div key={section.id}>
                        <h5>{section.title}</h5>
                        {section.type === 'list' ? (
                            <ol>
                                {section.content.map((listItem, j) => (
                                    <li className="mb-0" key={j}>
                                        <p
                                            className={
                                                j === section.content.length - 1
                                                    ? ''
                                                    : 'mb-3'
                                            }
                                        >
                                            {listItem}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            <p
                                className={
                                    i === descriptions.length - 1 ? 'mb-0' : ''
                                }
                            >
                                {section.content}
                            </p>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default Description;
