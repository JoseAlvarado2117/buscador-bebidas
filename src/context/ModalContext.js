import React, { useEffect, useState } from 'react';
import { createContext } from "react";



// CReamos el context
const ModalContext = createContext()



// creamos el provider
const ModalProvider = ({ children }) => {

    const [idreceta, setIdreceta] = useState(null)
    const [detalles, setDetalles] = useState({})

    useEffect(() => {
        if (idreceta) {
            const consultarAPI = async () => {
                let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

                const api = await fetch(url)
                const resultados = await api.json()

                setDetalles(resultados.drinks[0])
            }   

            consultarAPI()
        }
    }, [idreceta])

    const data = {
        detalles,
        setIdreceta,
        setDetalles
    }

    return (
        <ModalContext.Provider value={data}>
            { children }
        </ModalContext.Provider>
    )
}

export { ModalProvider }

export default ModalContext