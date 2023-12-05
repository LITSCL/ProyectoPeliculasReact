import React, { useState } from 'react';

export const BuscadorComponent = (props) => {
  var listadoState = props.listadoState;
  var setListadoState = props.setListadoState;
  var [busquedaState, setBusquedaState] = useState("");
  var [resultadosState, setResultadosState] = useState(true);

  const buscarPeliculaHandler = (e) => {
    //1. Obtener el input.
    var input = e.target;

    //2. Actualizar el estado.
    setBusquedaState(input.value);

    //3. Filtrar y buscar coincidencias.
    var peliculasEncontradas = listadoState.filter(pelicula => { //La función "filter", se aplica a un Array, donde se iteran todos los indices y se retorna un Array nuevo con las coincidencias.
      return pelicula.titulo.toLowerCase().includes(busquedaState.toLocaleLowerCase());
    });

    //4. Verificar si no hay nada escrito.
    if (busquedaState.length <= 1) {
      peliculasEncontradas = JSON.parse(localStorage.getItem("peliculas"));
      setResultadosState(true);
    }
    else if (peliculasEncontradas.length == 0) {
        setResultadosState(false);
    }

    //5. Reemplazar el Array de la lista principal.
    setListadoState(peliculasEncontradas);
  }

  return (
    <div className="buscador">
      <h3 className="titulo">Buscador: {busquedaState}</h3>
      {!resultadosState && (<span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>)}
      <form action="">
        <input type="text" name="busqueda" autoComplete="off" value={busquedaState} onChange={(e) => buscarPeliculaHandler(e)}/>
        <button>Buscar</button>
      </form>
    </div>
  );
}
