import Buton from "../componentes/Buton";
import Modal from "../componentes/Modal";
import { useState } from "react";


function Inicio(){
    const[mostrar, setMostrar]=useState(false)

    function cerrarModal(){
        setMostrar(false);
    }

    function mostrarModal(){
        setMostrar(true);
    }

    return(
        <main>
            <h1>Inicio</h1>
            <Buton funcion={mostrarModal}>Mostrar</Buton>

            {mostrar && (
                <Modal>
                    <h2>Listo</h2>
                    <p>Tu mensaje fue enviado</p>
                    <Buton funcion={cerrarModal}>Aceptar</Buton>
                </Modal>
            )}
        </main>
    )
}
export default Inicio