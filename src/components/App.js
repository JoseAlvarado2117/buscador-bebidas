import React from 'react'
import { CategoriaProvider } from '../context/CategoriaContext'
import { ModalProvider } from '../context/ModalContext'
import { RecetasProvider } from '../context/RecetasContext'

import '../styles/components/app.css'
import Formulario from './Formulario'
import Header from './Header'
import Recetas from './Recetas'

const App = () => {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <Formulario />
          <Recetas />
        </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider>
  )
}

export default App
