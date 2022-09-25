import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContex'
import './modalUsuario.css'  
import icono_cerrar from '../../img/cerrar.svg'
import { PeticionesApi } from '../../peticioneApi/PeticionesApi'

const ModalUsuario= () => { 
    const{setModal, empleado, setEmpleado}=useContext(AppContext)

    const{añadirEmpleado, actualizarEmpleado, cargarEmpleados}=PeticionesApi();

    const [infEmpleado, setInfEmpleado] = useState({
        cedulaempleado:empleado.cedulaempleado? empleado.cedulaempleado:"",
        nombre:empleado.nombre? empleado.nombre:"",
        email:empleado.email?empleado.email:"",
        rol:"Empleado",
        telefono:empleado.telefono?empleado.telefono:"",
        estado:true,
        empresa: {
            "nitempresa": 2,
            "nombre": "Langel",
            "direccion": "Barranquilla",
            "telefono": "123456789",
            "tipo": "Principal"
        }
    });
    const handleOnchange=(e)=>{
        setInfEmpleado({
            ...infEmpleado, [e.target.name]:e.target.value
        })
    }
    const handleCerrarModal=(e)=>{
        e.preventDefault();
        setModal(false)
        setEmpleado({})
     } 
    //Funcion para añadir y actualizar empleado
     const handleAñadir=async(e)=>{
        e.preventDefault();  
        if(empleado.cedulaempleado){
           await actualizarEmpleado(infEmpleado)
        }else{
            await añadirEmpleado(infEmpleado)
        } 
        setModal(false);   
        setEmpleado({});
        await cargarEmpleados();
    }
    
  return (
    <div className='contenedor-modalusuarios'>
        <div className='cerrar-modal'>
            <img
                src={icono_cerrar}
                alt="icono-cerrar"  
                onClick={handleCerrarModal}            
            />

        </div>
        <div className='contenido-usuarios'>       
            {empleado.nombre? <h1>Modificar Empleado</h1>: <h1>Agregar Empleado</h1>}  
                <form className='formulario-usuarios'>
                    <label>Cédula</label>
                    <input
                        type="text"
                        name='cedulaempleado'
                        defaultValue={empleado.cedulaempleado? empleado.cedulaempleado:""}
                        onChange={handleOnchange}                     
                    />
                    <label>Nombre</label>
                    <input
                        type="text"
                        name='nombre'
                        defaultValue={empleado.nombre? empleado.nombre:""}
                        onChange={handleOnchange}                     
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        name='email'
                        defaultValue={empleado.email?empleado.email:""}
                        onChange={handleOnchange}                     
                    />
                    
                    <label>Teléfono</label>
                    <input
                        type="text"  
                        name='telefono'
                        defaultValue={empleado.telefono?empleado.telefono:""}
                        onChange={handleOnchange}                   
                    />
                    <div className='input-usuario'>
                    <input                        
                        type="submit" 
                        value={empleado.cedulaempleado? "Modificar": "Añadir" }
                        onClick={handleAñadir}                       
                                            
                    />
                    </div>

                    
                </form>
        </div>
    </div>
  )
  }

export default ModalUsuario
