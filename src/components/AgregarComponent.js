import React, { useState } from 'react';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';

export const AgregarComponent = (props) => {
  var listadoState = props.listadoState;
  var setListadoState = props.setListadoState;
  var [peliculaState, setPeliculaState] = useState({
    id: "",
    titulo: "",
    descripcion: ""
  });
  var tituloComponente = "Agregar Pelicula";
  var localStorageHelper = new LocalStorageHelper();

  const enviarFormularioHandler = (e) => {
    //1. Evitar la recarga del formulario.
    e.preventDefault();
    
    //2. Obtener datos de los campos.
    var titulo = e.target.titulo.value;
    var descripcion = e.target.descripcion.value;

    //3. Setear el objeto.
    var pelicula = {
      id: new Date().getTime(),
      titulo: titulo,
      descripcion: descripcion
    };

    setPeliculaState(pelicula);

    //4. Agregar el objeto a la lista principal.
    if (Array.isArray(JSON.parse(JSON.stringify(listadoState)))) {
      setListadoState((elementos) => {
        return [...elementos, pelicula];
      });
    }
    else {
      return setListadoState([pelicula]);
    }

    //5. Alamacenar el objeto en el localstorage.
    localStorageHelper.guardarEnLocalStorage("peliculas", pelicula);
  }

  return (
    <div className="agregar">
      <h3 className="titulo">{tituloComponente}</h3>
      <strong>
        {peliculaState.titulo && peliculaState.descripcion && ("Has agregado la pelicula: " + peliculaState.titulo)} {/*Se recomienda usar el formato "IF Ternario" cuando el bloque de instrucciones es sencillo.*/}
      </strong>
      <form onSubmit={(e) => enviarFormularioHandler(e)}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo"/>
        <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
        <input type="submit" value="Añadir"/>
      </form>
    </div>
  );
}
