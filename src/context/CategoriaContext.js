import React from 'react'

import { createContext, useEffect, useState } from 'react'

// Creamos el context
const CategoriaContext = createContext()

// Creamos el Provider
const CategoriaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const api = await fetch(url)
      const resultados = await api.json()

      setCategorias(resultados.drinks)
      // const api =  fetch(url)
      //     .then((res) => res.json())
      //     .then((json) => {
      //         setCategorias(json)
      //     })
    }

    consultarAPI()
  }, [])

  const data = { categorias }

  return (
    <CategoriaContext.Provider value={data}>
      {children}
    </CategoriaContext.Provider>
  )
}

export { CategoriaProvider }

export default CategoriaContext
