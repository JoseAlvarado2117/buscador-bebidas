import React, { useContext } from 'react'
import ModalContext from '../context/ModalContext';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';



const Receta = ({ receta }) => {

    const { idDrink, strDrink, strDrinkThumb} = receta;
    const { detalles, setIdreceta, setDetalles } = useContext(ModalContext);
    const [ isOpenModal, openModalReceta, closeModalReceta ] = useModal()


        // Muestra y formatea los ingredientes
        const mostrarIngredientes = (detalles) => {
            let ingredientes = [];
    
            for (let i=1; i< 16; i++) {
                if (detalles[`strIngredient${i}`]) {
                    ingredientes.push(
                        <li key={detalles[`strIngredient${i}`]}>{ detalles[`strIngredient${i}`] } { detalles[`strMeasure${i}`] }</li>
                    )
                }
            }
    
            return ingredientes;
        }

    return (
        <div className='contenedor-receta'>
            <h3>{strDrink}</h3>
            <img src={strDrinkThumb} alt={strDrinkThumb} />
            <button 
                className='boton'
                onClick={() => {
                    setIdreceta(idDrink)
                    openModalReceta()
                }}
            >Ver Imagen</button>
            <Modal 
                isOpen={isOpenModal}
                closeModal={closeModalReceta}
            >
                <h2>{detalles.strDrink}</h2>
                <h3>Instrucciones:</h3>
                <p>
                    {detalles.strInstructions}
                </p>
                <img src={detalles.strDrinkThumb} alt={`Image{detalles.strDrink}`} />
                <h3>Ingredientes y cantidades</h3>
                <ul>
                    { mostrarIngredientes(detalles)}
                </ul>
            </Modal>
        </div>
    );
}

export default Receta;