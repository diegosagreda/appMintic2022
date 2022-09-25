import { useEffect, useState, useContext } from 'react';
import './tablaEmpresa.css'
import iconoeliminar from '../../img/icono_eliminar.png'
import iconoactualizar from '../../img/icono_editar.png'
import ModalEmpresa from './ModalEmpresa';
import { AppContext } from '../../context/AppContex';
import { PeticionesApi } from '../../peticioneApi/PeticionesApi';

const TablaEmpresa = () => {  
  const{empresas, setEmpresa, modal, setModal}=useContext(AppContext)
  const{cargarEmpresas, eliminarEmpresa}=PeticionesApi();

// Para listar empresas desde la api
useEffect(()=>{
  cargarEmpresas()  
},[])

 //eliminar empresa
 const handleEliminarEmpresa=async(empresa)=>{
    await eliminarEmpresa(empresa);
    await cargarEmpresas();
} 
  //modificar empresa
  const modificarEmpresa=(empr)=>{
    setEmpresa(empr)
    setModal(true)      
  }
  
  const handleAbrirModal=(e)=>{
    e.preventDefault();
    setModal(true)  
  }
  
  return (
    <div className='contenido-empresas'>
       <div className='input-nuevoempresa'>
        <input
          type="submit"
          value="Agregar Empresa"
          onClick={handleAbrirModal}
         
        />
        </div>
      <div  className='tabla-empresa'>
            <table>
                <thead>
                    <tr>           
                        <th width="32%">Nombre</th>
                        <th width="25%">Dirección</th>
                        <th width="10%">Teléfono</th>
                        {/* <th width="17%">Tipo</th> */}
                        <th width="27%">Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo-empresa'>  
                  {empresas.map(emp=>(
                    <tr>                
                        <td>{emp.nombre}</td>
                        <td>{emp.direccion}</td>
                        <td>{emp.telefono}</td>
                        {/* <td></td> */}
                        <td> 
                        <img
                            src={iconoactualizar}
                            alt="actualizar"
                            onClick={()=>modificarEmpresa(emp)}
                            />
                            <img
                            src={iconoeliminar}
                            alt="eliminar"
                            onClick={()=>handleEliminarEmpresa(emp)}
                            />                         
                        </td>
                    </tr>
                  )) }             
                                      
                </tbody>
            </table>           
        </div>
        {modal && <ModalEmpresa/>}
    </div>
  )
}
// comentario
export default TablaEmpresa
