import { useState } from 'react';

export const Editar = () => {
  const [resultado, setResultado] = useState("no_enviado");

  const editarArticulo = (e) => {
    e.preventDefault();
    setResultado("guardado");
  };

  return (
    <div className="jumbo">
      <h1>Editar artículo</h1>
      <p>Formulario para editar (Sin conexión a base de datos)</p>
      
      <strong>
        {resultado === "guardado" ? "¡Artículo actualizado con éxito! (Simulado)" : ""}
      </strong>

      <form className="formulario" onSubmit={editarArticulo}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" defaultValue="Título de prueba a editar" />
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea name="contenido" defaultValue="Este es un contenido de prueba..."></textarea>
        </div>

        <input type="submit" value="Actualizar" className="btn btn-success" />
      </form>
    </div>
  );
};