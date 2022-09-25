import { useState, useContext, useEffect} from 'react'
import { AppContext } from '../../context/AppContex'
import './home.css'
import logoPrincipal from '../../img/icono.png'
import Principal from '../vistaPrincipal/Principal'
import IngresosGastos from '../imgresosEgresos/IngresosGastos'
import Usuarios from '../usuarios/Usuarios'
import Empresas from '../empresas/Empresas'
import btn_salir from '../../img/btn-salir.png'
import swal from 'sweetalert'

import { useNavigate } from 'react-router-dom'

const Home = () => {
 
  const [pagina, setPagina] = useState("principal")
  const{usuario, setLogueado}=useContext(AppContext);
  const navigate=useNavigate();

 
  
const handlePrincipal=(e)=>{
  e.preventDefault();
  setPagina("principal")
}
const handleIngresosGastos=async(e)=>{
  e.preventDefault();
  setPagina("ingresosGastos")


}

const handleUsuarios=(e)=>{
  e.preventDefault();
  setPagina("usuarios")
}
const handleEmpresas=(e)=>{
  e.preventDefault();
  setPagina("empresas")
}

const mostrarAlerta=()=>{
  swal({   
    title:"¿Desea cerrar sesión?",
    icon:'info',
    buttons:["Cancelar", "Aceptar"],
      
  })
    .then((salir)=>{
      if(salir){       
    setLogueado(false)
    navigate("/login")
    localStorage.clear();
  }})};

  return (
    <>
    <header className='contenedor-home'>
    <div className='btn-salir'>
      <img      
        src={btn_salir}
        onClick={mostrarAlerta}

      />
    </div>  
        <div className='contenido-header'>
            <div className='logo-principal'>
                <img
                src={logoPrincipal}
                />
                <p>{usuario.empleado.nombre}</p>                
            </div> 
            <nav className='navegador-header'>
                 <a href='#'
                  onClick={handlePrincipal}                 
                 >Principal</a>
                <a href='#'
                  onClick={handleIngresosGastos}
                >Ingresos y Egresos</a>
                {usuario.empleado.rol==="Administrador"? 
                <a href='#'
                  onClick={handleUsuarios}
                >Empleados</a>
                :
                null
                 }                
                <a href='#'
                  onClick={handleEmpresas}
                >Empresa</a>
            </nav>  
        </div>
    </header>

    <main>
      <div>
        {pagina==="principal"? <Principal/>:""}
        {pagina==="ingresosGastos"? <IngresosGastos/>:""}
        {pagina==="usuarios"? <Usuarios/>:""}
        {pagina==="empresas"? <Empresas/>:""}

      </div>
    </main>  
    
    <footer className='contenedor-footer'>
    <p>Todos los derechos reservados @ 2022</p>
    </footer>
    </>
  )
}

export default Home
