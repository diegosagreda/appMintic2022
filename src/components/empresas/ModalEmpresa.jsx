import { useState, useContext} from 'react'
import './modalEmpresa.css' 
import { AppContext } from '../../context/AppContex';
import icono_cerrar from '../../img/cerrar.svg'
import Mensaje from '../mensaje/Mensaje';
import { PeticionesApi } from '../../peticioneApi/PeticionesApi';
const ModalEmpresa= () => { 
    const{empresa, setEmpresa, mensaje, setModal, setEmpresas}=useContext(AppContext)
    const{cargarEmpresas, añadirEmpresa, actualizarEmpresa}=PeticionesApi();
    
    const [infEmpresa, setInfEmpresa] = useState({
        nitempresa:empresa.nitempresa? empresa.nitempresa:"",
        nombre:empresa.nombre?empresa.nombre:"",
        direccion:empresa.direccion?empresa.direccion:"",
        telefono:empresa.telefono?empresa.telefono:"",
        estado:true,
        tipo:"Cliente"
    });
    const handleOnchange=(e)=>{
        setInfEmpresa({
            ...infEmpresa, [e.target.name]:e.target.value
    })}    
    const handleCerrarModal=(e)=>{
        e.preventDefault();
        setModal(false)
        setEmpresa({})
    }
        //se condiciona si existe una empresa para actuaalizar y si no se añade
    const handleAñadir=async(e)=>{
        e.preventDefault(); 
        if(empresa.nitempresa){
            await actualizarEmpresa(infEmpresa)            
        }else{
            //Funcion Añadir Empres
        await añadirEmpresa(infEmpresa);
        }                  
        setModal(false)
        setEmpresa({})          
        await cargarEmpresas();
    }
        
  return (
    <div className='contenedor-modalempresa'>
        <div className='cerrar-modal'>
            <img
                src={icono_cerrar}
                alt="icono-cerrar"   
                onClick={handleCerrarModal}           
            />

        </div>
        <div className='contenido-empresa'>   
         {empresa.nombre? <h1>Modificar Empresa</h1>: <h1>Agregar Empresa</h1>}    
            
            {mensaje && <Mensaje>
                <p>Debe llenar todos los campos</p>
            </Mensaje>}
            
                <form className='formulario-empresa'>
                
                    <label>NIT</label>
                    <input                       
                        type="text"
                        name="nitempresa"
                        defaultValue={empresa.nitempresa? empresa.nitempresa:""}
                        onChange={handleOnchange}                     
                    />
                    <label>Nombre</label>
                    <input
                        type="text"
                        name='nombre'
                        defaultValue={empresa.nombre? empresa.nombre:""}
                        onChange={handleOnchange}                     
                    />
                    <label>Dirección</label>
                    <input
                        type="text"
                        name='direccion'
                        defaultValue={empresa.direccion? empresa.direccion:""}
                        onChange={handleOnchange}
                     
                    />
                    <label>Teléfono</label>
                    <input
                        type="text" 
                        name='telefono'
                        defaultValue={empresa.telefono? empresa.telefono:""}
                        onChange={handleOnchange}                     
                    />
                    
                    <div className='input-empresa'>
                    <input                        
                        type="submit"
                        value={empresa.nombre? "Modificar": "Añadir" }
                        onClick={handleAñadir}                      
                    />
                    </div>

                    
                </form>
        </div>
    </div>
  )
}

export default ModalEmpresa
