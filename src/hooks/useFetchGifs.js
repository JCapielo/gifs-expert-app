import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
     const [images, setImages] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
    } 
    
    /* se retiro la funcion getGifs(); de este bloque  porque 
    a nivel de procesamiento cada vez que se envie una nueva categoria se reimprime todos los resultados 
    anteriores generando mas espacio en memoria. para evitarlo se hace el uso de
    el HOOKS USEEFFECT*/


    /*El useEffect se compone de dos parte. la 1era una funcion CALLBACK que es la que ejecutara cada vez 
      que se renderice el componente. Y la 2da que son las CONDICIONES bajo las que se va a ejecutar esa funcion
      en este caso [ ] si la condicion esta vacia solo se ejecutara 1 vez. */
    useEffect(() => {
      
      getImages();
    
    }, [])
    
    return {
        /*En ES6 si el objeto retorna el mismo valor y tienen el mismo nombre
          se puede hacer de la siguiuente manera*/
          images,
          isLoading
        
          // images: images,
          // isLoading: isLoading
    }
}
