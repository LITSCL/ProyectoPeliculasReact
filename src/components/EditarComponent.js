import React from 'react';

export const EditarComponent = (props) => {
  var pelicula = props.pelicula;
  var getPeliculas = props.getPeliculas;
  var setEditarPeliculaState = props.setEditarPeliculaState;
  var setListadoState = props.setListadoState;

  const guardarEdicionHandler = (e, idPelicula) => {
    //1. Evitar que se recargue la página.
    e.preventDefault();

    //2. Obtener el formulario.
    var formulario = e.target;

    //3. Obtener todas las peliculas.
    var peliculas = getPeliculas();
    
    //4. Obtener el indice de la pelicula a editar.
    var indice = peliculas.findIndex(pelicula => pelicula.id == idPelicula);
    
    //5. Crear un nuevo objeto con los datos recibidos.
    var pelicula = {
      id: idPelicula,
      titulo: formulario.titulo.value,
      descripcion: formulario.descripcion.value
    }

    //6. Reemplazar el objeto en el Array de peliculas.
    peliculas[indice] = pelicula;

    //7. Reemplazar el Array de la lista principal.
    setListadoState(peliculas);

    //8. Actualizar la lista del localstorage.
    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    //9. Actualizar el estado de edición de pelicula para cerrar el formulario de edición.
    setEditarPeliculaState(false);
  }

  return (
    <div>
      <h3 className="titulo"></h3>
      <form onSubmit={(e) => guardarEdicionHandler(e, pelicula.id)}>
        <input type="text" name="titulo" defaultValue={pelicula.titulo}/>
        <textarea name="descripcion" defaultValue={pelicula.descripcion}></textarea>
        <input type="submit" className="editar" value="Actualizar"/>
      </form>
    </div>
  );
}
