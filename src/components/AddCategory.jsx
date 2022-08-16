import { useState } from "react"


//onNewCategory es lo que se desestructura del (event) que se envia desde el componente padre
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    //desestructuro el EVENT para sacar el Target
    const onInputChange = ({target}) =>{
        //console.log(target.value);
        setinputValue (target.value);
    }

    //para evitar que se actualice el navegador
    const onSubmit = (event) =>{
        event.preventDefault();
        // console.log(inputValue);

        //retorna una funcion callback
        // si se cumple sale de la funcion
        if( inputValue.trim().length <= 1) return;

        //DEJAMOS EL QUE SEA EL COMPONENTE PADRE QUIEN LO RENDERICE 
        // SOLO LE ENVIAMOS EL VALOR YA LIMPIO
        //setCategories(categories => [inputValue, ...categories]);

        //onNewCategory ejecuta onAddCategory que esta en el componente padre que lo que hace es renderizar
        onNewCategory( inputValue.trim() )
        setinputValue('');
    }
    return (
        <form onSubmit={ (event) => onSubmit(event)}>
             <input 
                type="text" 
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={ (event) => onInputChange (event) }
            />
        </form>
       
    )
}
