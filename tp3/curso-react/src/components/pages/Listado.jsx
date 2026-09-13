export const Listado = ({ articulos, setArticulos }) => {

  const eliminar = (id) => {
    let articulosActualizados = articulos.filter(articulo => articulo._id !== id);
    setArticulos(articulosActualizados);
  };

  return (
    articulos.map(articulo => (
      <article key={articulo._id} className="articulo-item">
        <div className="mascara">
          {/* Imagen de prueba por defecto */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="Javascript" />
        </div>
        
        <div className="datos">
          <h3 className="title">{articulo.titulo}</h3>
          <p className="description">{articulo.contenido}</p>
          
          <button className="edit">Editar</button>
          <button className="delete" onClick={() => eliminar(articulo._id)}>Borrar</button>
        </div>
      </article>
    ))
  );
};