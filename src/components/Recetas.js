import React, { useContext } from 'react';
import RecetasContext from '../context/RecetasContext';
import Receta from './Receta';


const Recetas = () => {

    const { recetas } = useContext(RecetasContext)

    return (
        <article className="contenedor-recetas contenedor">
            {
                recetas.map(receta => (
                    <Receta
                        key={receta.idDrink}
                        receta={receta}
                    />
                ))
            }
        </article>
    );
}

export default Recetas;