import React, { useContext, useState } from 'react'
import CategoriaContext from '../context/CategoriaContext'
import RecetasContext from '../context/RecetasContext'

const initialBusqueda = {
  ingrediente: '',
  categoria: '',
}

const Formulario = () => {
  const { categorias } = useContext(CategoriaContext)
  const { error, buscarBusqueda, setError, setConsultar } =
    useContext(RecetasContext)

  const [busqueda, setBusqueda] = useState(initialBusqueda)

  const { ingrediente, categoria } = busqueda

  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    })
  }

  const handleBlur = (e) => {
    handleChange(e)
    if (
      busqueda.ingrediente.trim() === '' ||
      busqueda.categoria.trim() === ''
    ) {
      setError(true)
      return
    }

    setError(false)
  }

  const guardarBusquedaState = (e) => {
    e.preventDefault()

    buscarBusqueda(busqueda)

    setConsultar(true)

    setBusqueda(initialBusqueda)
  }

  if (!categorias) return

  return (
    <form className="form contenedor" onSubmit={guardarBusquedaState}>
      <h2>Busca bebidas por Categoria o Ingrediente</h2>
      <div className="inputs">
        <input
          type="text"
          name="ingrediente"
          className={`input ${error ? 'error' : null}`}
          placeholder="Busca por ingrediente"
          onChange={handleChange}
          onBlur={handleBlur}
          value={ingrediente}
        />
        <select
          name="categoria"
          className={`select ${error ? 'error' : null}`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={categoria}
        >
          <option value="">--Selecciona por Categoria--</option>
          {categorias.map((categoria) => (
            <option key={categoria.strCategory} value={categoria.strCategory}>
              {categoria.strCategory}
            </option>
          ))}
        </select>

        <input type="submit" value="Buscar bebidas" className="boton" />
      </div>
    </form>
  )
}

export default Formulario
