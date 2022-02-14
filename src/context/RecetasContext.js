import React, { useEffect, useState } from 'react';

import { createContext } from 'react'

// Creamos el context
const RecetasContext = createContext()


// Creamos el provider
const RecetasProvider = ({ children }) => {

    const [recetas, setRecetas] = useState([])
    const [error, setError] = useState(false)
    const [consultar, setConsultar] = useState(false)
    const [busqueda, buscarBusqueda] = useState({
        ingrediente: '',
        categoria: ''
    })


    const { ingrediente, categoria } = busqueda;


    useEffect(() => {

        if (consultar) {

            // Consultar api
            const consultarAPI = async () => {
                let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
                const api = await fetch(url);
                const resultados = await api.json();
    
                setRecetas(resultados.drinks)
            }
    
            consultarAPI()
        }

    }, [busqueda])


    const data = {
        recetas,
        error,
        buscarBusqueda,
        setError,
        setConsultar
    }

    return ( 
        <RecetasContext.Provider value={data}>
            { children }
        </RecetasContext.Provider>
    )
}

export { RecetasProvider }

export default RecetasContext
