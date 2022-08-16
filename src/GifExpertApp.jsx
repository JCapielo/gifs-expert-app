import { useState } from "react";
//se hace uso del archivo barril index.js de la carpeta components
import { AddCategory, GifGrid} from "./components";


// import React from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        /*no funciona el push porque dicha funcion lo que hace es mutar al arreglo para añadir el
         nuevo elemento. React evita hacer ese tipo de practicas y por ende no funciona*/
        //categories.push('Valorant');

        /* Se hace el uso de setCategories para renderizar(imprimir) el nuevo componente*/
        //forma 1 (recomendada)
        //console.log(newCategory);

        //evalua si la nueva categoria esta dentro de CATEGORIES si es asi no hace nada
        // OJO esto no distingue de MAYUS y MINUS por que reac detecta que son diferentes
        // Por ende habria que agregar mas validaciones para evitar eso.
        if( categories.includes(newCategory)) return;

        setCategories([newCategory,...categories ]);

        //forma 2 usando la funcion callback
        // setCategories ( cat => [...categories,'Valorant'])
    }
    //console.log(categories);
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        
        <AddCategory 
            /* De esta forma no esta mal elaborada pero rompe un poco la semantica de Reac y hace un poco mas ilegible el codigo */
            // setCategories={ setCategories }

            /*Se recomienda que cuando se envia un atributo que dispara un evento empiece con la palabra ON para que en terminos de lectura del codigo
              se sobre entienda que es un evento que se despara hacia otro componente. cave destacar que se recomienda que el componente padre tenga las
              validaciones necesarias para evitar que los componentes hijos las repitan */
            onNewCategory={ (event) => onAddCategory( event ) }
        />
       
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        
            {
                //como retorna el mismo objeto se elimina el Return
                categories.map( (category) => (
                    // en vez de generar el resultado de este lado se hace atravez de otro componente en caso de que se un bloque mas extenso de codigo
                    // <li key={category}>{category}</li>


                    //desde este componente se mostrara todo el bloque de respuesta
                    <GifGrid 
                        key={category}
                        category={ category }
                    />
                    
                    
                ))
            }
       
            
    </>
    
  )
}
