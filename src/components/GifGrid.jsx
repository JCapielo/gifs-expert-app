import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({category}) => {
    /* useFetchGifs es un HOOKS personalizado creado para que este sea reutilizado en algun futuro
       cabe destacar que todos los hook personalizados empienzan con USE para que reac los detecte
       en este caso este hook realiza la obtencion de imagenes
       
       el isLoading se implementara mas adelanrte*/
    const {images, isLoading} = useFetchGifs (category);

    // console.log({images,isLoading});
    return (
    <>
        <h3>{ category }</h3>


        {/* seccion de carga */}
        {
          //solo compara si es true
          isLoading && ( <h2>Cargando...</h2>)
        }
       
        <div className='card-grid'>
          {images.map( (img) =>(
              <GifItem
                 key={ img.id }
                 /*Una manera facil de pasar todas las propiedades de un objeto a OTRO COMPONENTE
                   En este caso se las envio a componente GifItem*/
                 {...img}
              />
          ) )}
        </div>
       
        
    </>
  )
}
