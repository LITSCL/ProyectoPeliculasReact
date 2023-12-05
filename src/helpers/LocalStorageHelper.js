export class LocalStorageHelper {

  guardarEnLocalStorage = (nombreElemento, valorElemento) => {
    //1. Conseguir los elementos.
    var elemento = JSON.parse(localStorage.getItem(nombreElemento));
  
    //2. Verificar si el elemento es un Array.
    if (Array.isArray(elemento)) {
      elemento.push(valorElemento); //Agregando un elemento al Array.
    }
    else {
      elemento = [valorElemento]; //Creando el Array y agregando el primer elemento.
    }
  
    //3. Agregando pelicula al localstorage.
    localStorage.setItem(nombreElemento, JSON.stringify(elemento));
  }

}

