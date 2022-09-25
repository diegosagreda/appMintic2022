import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/AppContex';
import './tablaUsuarios.css'
import iconoeliminar from '../../img/icono_eliminar.png'
import iconoactualizar from '../../img/icono_editar.png'
import ModalUsuario from './ModalUsuario';
import { PeticionesApi } from '../../peticioneApi/PeticionesApi';

const TablaUsuario = () => {   
    const{modal, setModal, empleados, setEmpleados, setEmpleado}=useContext(AppContext);  
    
    const{cargarEmpleados, eliminarEmpleado}=PeticionesApi();

    //Listar empleados
    useEffect(()=>{
        cargarEmpleados();
    },[]);

     //eliminar empleado
  const handleEliminarEmpleado=async(empleado)=>{
    await eliminarEmpleado(empleado);
    await cargarEmpleados()

  }

      //modificar empleado
  const modificarEmpleado=(emple)=>{
    setEmpleado(emple)
    setModal(true)    
  }
 

    const handleModalUsuario=(e)=>{
        e.preventDefault();
        setModal(true)
    }
 
  return (
    <div className='contenido-usuario'>
       <div className='input-nuevousuario'>
        <input
          type="submit"
          value="Nuevo Empleado"
          onClick={handleModalUsuario}
        />
        </div>
      <div  className='tabla-usuario'>
            <table>
                <thead>
                    <tr>           
                        <th width="10%">Cédula</th>
                        <th width="30%">Nombre</th>
                        <th width="20%">Email</th>
                        <th width="17%">Rol</th>
                        <th width="10%">Teléfono</th>
                        <th width="22%">Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo-usuario'>   

                    {empleados.map(emple=>(
                        <tr>                
                            <td>{emple.cedulaempleado}</td>
                            <td>{emple.nombre}</td>
                            <td>{emple.email}</td>
                            <td>{emple.rol}</td>
                            <td>{emple.telefono}</td>
                            <td> 
                        <img
                            src={iconoactualizar}
                            alt="actualizar"
                            onClick={()=>modificarEmpleado(emple)}
                            />
                            <img
                            src={iconoeliminar}
                            alt="eliminar"
                            onClick={()=>handleEliminarEmpleado(emple)}
                            />                         
                        </td>
                    </tr> 

                    ))}             
                                     
                </tbody>
            </table>
        </div>
        {modal&& <ModalUsuario
                  
        />}
    </div>
  )
}
// comentario
export default TablaUsuario
