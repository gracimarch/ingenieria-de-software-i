import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const Crear = () => {
  const { formulario, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no_enviado");

  const guardarArticulo = (e) => {
    e.preventDefault();
    
    let { titulo, contenido } = formulario;

    if (!titulo || !contenido || titulo.trim() === "" || contenido.trim() === "") {
      setResultado("error");
      return; 
    }

    console.log("Datos validados y listos para enviar:", formulario);
    setResultado("guardado");
  };

  return (
    <div className="jumbo">
      <h1>Crear artículo</h1>
      <p>Formulario local con validación de campos</p>
      
      <strong>
        {resultado === "guardado" ? "¡Artículo guardado con éxito! (Revisa la consola)" : ""}
        {resultado === "error" ? "Los datos proporcionados son incorrectos (campos vacíos)" : ""}
      </strong>

      <form className="formulario" onSubmit={guardarArticulo}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea name="contenido" onChange={cambiado}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
};