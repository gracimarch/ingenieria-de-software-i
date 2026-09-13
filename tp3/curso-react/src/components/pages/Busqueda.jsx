import { useState } from 'react';
import { Listado } from './Listado';

export const Busqueda = () => {
  const [articulos, setArticulos] = useState([
    { _id: '10', titulo: 'Resultado de búsqueda 1', contenido: 'Contenido encontrado...' }
  ]);

  return (
    <>
      <h1>Resultados de la Búsqueda</h1>
      {articulos.length >= 1 ? (
        <Listado articulos={articulos} setArticulos={setArticulos} />
      ) : (
        <h1>No se encontraron resultados</h1>
      )}
    </>
  );
};