import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  /* Usar el Modo Stricto permite que reac evalue con mas presicion todo el codigo en busca de una mala sintaxis o menos de los hooks y componentes con 
     el fin de detallarnos que estamos haciendo mal por eso es que por consola se imprime 2 veces el resultado. si lo quitamos
     ya solo se imprime una vez. */
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode> 
)
