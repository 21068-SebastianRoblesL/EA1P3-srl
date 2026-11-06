import { useState } from "react"
import Buton from "../componentes/Buton.jsx";
import Modal from "../componentes/Modal.jsx";

function Preguntas(){
    const [nombre, setNombre]=useState("")
    const [correo, setCorreo]=useState("")
    const [comentario, setComentario]=useState("")

    const[mostrar, setMostrar]=useState(false)
    const[mensaje, setMensaje]=useState("")

    function cerrarModal(){
        setMostrar(false);
    }

    function mostrarModal(){
        setMostrar(true);
    }

    function enviarFormulario(evento){
        evento.preventDefault();
        if(
            nombre.trim()===""||
            correo.trim()===""||
            comentario.trim()===""
        ){
            setMensaje("Complete todos los campos")
        }else{
            setMensaje("Se envio correctamente")
            limpiarFormulario()
        }
        setMostrar(true)
    }
    function limpiarFormulario(){
        setComentario("")
        setCorreo("")
        setNombre("")
    }
    return(
        <main>
            <h1>Preguntas</h1>
            <form onSubmit={enviarFormulario}>
                <label>Nombre:</label>
                <input 
                    type="text"
                    value={nombre}
                    onChange={(evento)=>setNombre(evento.target.value)} 
                />
                <label>Correo:</label>
                <input 
                    type="email"
                    value={correo}
                    onChange={(evento)=>setCorreo(evento.target.value)} 
                />
                <label>Comentario:</label>
                <textarea 
                    type="text"
                    value={comentario}
                    onChange={(evento)=>setComentario(evento.target.value)} 
                />
                <button type="submit">Enviar</button>
            </form>
            {mostrar && (
                <Modal>
                    <h2>Mensaje</h2>
                    <p>{mensaje}</p>
                    <Buton funcion={cerrarModal}>Aceptar</Buton>
                </Modal>
            )}
        </main>
    )
}
export default Preguntas;