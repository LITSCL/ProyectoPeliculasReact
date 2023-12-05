import React, { useEffect, useState } from 'react';
import { EditarComponent } from './EditarComponent';

export const ListadoComponent = (props) => {
  var listadoState = props.listadoState;
  var setListadoState = props.setListadoState;
  var [editarPelicula, setEditarPeliculaState] = useState(false);

  useEffect(() => {
    getPeliculas();
  }, [])

  const getPeliculas = () => {
    var peliculas = JSON.parse(localStorage.getItem("peliculas"));
    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPeliculaHandler = (e, idPelicula) => {
    //1. Conseguir las peliculas.
    var listaPeliculasActuales = getPeliculas();

    //2. Remover la pelicula del Array.
    var listaPeliculasNuevas = listaPeliculasActuales.filter(pelicula => pelicula.id != parseInt(idPelicula)); //La función "filter", se aplica a un Array y retorna un Array nuevo con los elementos que cumplen la condición establecida por parámetro.

    //3. Actualizar la lista del estado.
    setListadoState(listaPeliculasNuevas);

    //4. Actualizar la lista del localstorage.
    localStorage.setItem("peliculas", JSON.stringify(listaPeliculasNuevas));
  }

  return (
    <>
      {
        !listadoState || Array.isArray(listadoState) && listadoState.length == 0 ? ( //If.
          <h2>No hay peliculas para mostrar</h2>
        )
        : ( //Else.
          listadoState.map((pelicula) => { //Recorriendo el Array.
            return (
              <article key={pelicula.id} className="item-pelicula">
                <h3 className="titulo">{pelicula.titulo}</h3>
                <p className="descripcion">{pelicula.descripcion}</p>
                <button className="editar" onClick={() => setEditarPeliculaState(pelicula.id)}>Editar</button>
                <button className="borrar" onClick={(e) => borrarPeliculaHandler(e, pelicula.id)}>Borrar</button>
                {editarPelicula == pelicula.id && (<EditarComponent pelicula={pelicula} getPeliculas={getPeliculas} setEditarPeliculaState={setEditarPeliculaState} setListadoState={setListadoState}></EditarComponent>)}
              </article>
            )
          })
        )
      }
    </>
  );
}

