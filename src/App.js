import './App.css';
import React, { useState } from 'react';
import { ListadoComponent } from './components/ListadoComponent';
import { BuscadorComponent } from './components/BuscadorComponent';
import { AgregarComponent } from './components/AgregarComponent';

function App() {
  //Estados globales (Se utilizan en varios componentes, por ende, deben estar actualizados de igual forma en todos los componentes).
  var [listadoState, setListadoState] = useState([]);

  return (
    <div className="contenedor">
      {/* Cabecera. */}
      <header>
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>

      {/* Barra de navegación */}
      <nav>
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido principal. */}
      <section className="contenido">
        <ListadoComponent listadoState={listadoState} setListadoState={setListadoState}></ListadoComponent>
      </section>

      {/* Barra lateral. */}
      <aside className="lateral">
        <BuscadorComponent listadoState={listadoState} setListadoState={setListadoState}></BuscadorComponent>
        <AgregarComponent listadoState={listadoState} setListadoState={setListadoState}></AgregarComponent>
      </aside>

      {/* Footer. */}
      <footer>
        &copy; Master en React
      </footer>
    </div>
  );
}

export default App;
