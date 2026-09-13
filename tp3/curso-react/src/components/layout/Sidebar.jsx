import React from 'react';

export const Sidebar = () => {
  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" id="search_field" placeholder="Buscar..." />
          <button id="search" className="btn">Buscar</button>
        </form>
      </div>
    </aside>
  );
};