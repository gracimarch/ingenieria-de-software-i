import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className="jumbo">
      <h1>Bienvenido al blog con React</h1>
      <p>Blog web desarrollado con React JS, NodeJS. No utiliza API</p>
      <Link to="/articulos" className="button btn-success">Ver los artículos</Link>
    </div>
  );
};