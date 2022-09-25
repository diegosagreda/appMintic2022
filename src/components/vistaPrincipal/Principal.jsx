import {useContext} from 'react'
import './principal.css'
import iconoingresogasto from '../../img/icono-ingresosgastos.png'
import iconousuarios from '../../img/icono-usuarios.png'
import iconoempresas from '../../img/icono-empresas.png'
import {AppContext} from '../../context/AppContex'


const Principal = () => {

    const {usuario} = useContext(AppContext)
    const{setPagina}=useContext(AppContext);  

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
      

  return (
    <main className='contenido-main'>
        <h2>Sistema de control de ingresos y egresos</h2>

        <div className='iconos-main'>
            <img
                src={iconoingresogasto}
                onClick={handleIngresosGastos}
            />
            {
                usuario.empleado.rol === "Administrador"?
                <img
                    src={iconousuarios}
                    onClick={handleUsuarios}
                />:
                null
            }
            <img
                src={iconoempresas}
                onClick={handleEmpresas}
            />
          

        </div>

    </main>
    
  )
}

export default Principal
