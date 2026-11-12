import{Link} from "react-router-dom"
import {UserRound} from 'lucide-react'
import "./Header.css"
function Header(){
    return(
        <header>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/preguntas">Preguntas</Link>
                <Link to="/Login"><UserRound size={25}/></Link>
            </nav>
        </header>
    )
}
export default Header;