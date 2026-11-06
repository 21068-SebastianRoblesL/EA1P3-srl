import {useState} from "react";
import Tarjeta from "../componentes/Tarjeta.jsx";
import Buton from "../componentes/Buton.jsx";
import Modal from "../componentes/Modal.jsx";
function Productos(){
    const [mostrar, setMostrar] = useState(false);

        function cerrarModal(){
            setMostrar(false)
        }

        function mostrarModal()
        {
            setMostrar(true)
        }
    return(
        <main>
            <h1>Productos</h1>
            <Tarjeta
                img=""
                title="Hamburguesa"
                desc="Incluye papas y refresco"
            >
                <Buton funcion={mostrarModal}>Comprar</Buton>

            </Tarjeta>
            <h1>Productos</h1>
            <Tarjeta
                img=""
                title="Hamburguesa"
                desc="Incluye papas y refresco"
            >
                <Buton funcion={mostrarModal}>Comprar</Buton>

            </Tarjeta>
            {mostrar && (
                <Modal>
                    <h2>Listo</h2>
                    <p>Tu solicitud fue enviada</p>
                    <Buton funcion={cerrarModal}>Aceptar</Buton>
                </Modal>
            )}
        </main>
    )

}

export default Productos;