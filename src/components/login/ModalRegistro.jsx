import './modalRegistro.css'  
import icono_cerrar from '../../img/cerrar.svg'

const ModalRegistro= ({setModal}) => { 

    const handleCerrarModal=(e)=>{
        e.preventDefault()
        setModal(false)
        return
    }
   
    
  return (
    <div className='contenedor-modalingresos'>
        <div className='cerrar-modal'>
            <img
                src={icono_cerrar}
                alt="icono-cerrar"  
                onClick={handleCerrarModal}      
            />

        </div>
        <div className='contenido-ingresos'>       
            <h1>Registro de Usuario</h1>
                <form className='formulario-ingresos'>
                    <label>Nombre</label>
                    <input
                        type="text"
                     
                    />
                    <label>Usuario</label>
                    <input
                        type="text"
                     
                    />
                    <label>Contraseña</label>
                    <input
                        type="text"                      
                    />                   
                    <div className='input-ingreso'>
                    <input                        
                        type="submit"
                        value="Registrar"                       
                    />
                    </div>

                    
                </form>
        </div>
    </div>
  )
}

export default ModalRegistro
