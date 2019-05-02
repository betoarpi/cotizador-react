import React from 'react';
import Header from './Header';
import Formulario from './Formulario';

function App() {
  return (
    <div className="contenedor">
      <Header
        titulo = "Cotizador de Seguro de Auto"
      />

      <div className="contenedor-formulario">
        <Formulario />
      </div>
    </div>
  );
}

export default App;
