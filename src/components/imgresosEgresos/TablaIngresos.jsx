import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/AppContex';
import { PeticionesApi } from '../../peticioneApi/PeticionesApi';
import { FormatoMoneda } from '../../helpers/helpers';
import './tablaIngresos.css'
import editar from '../../img/icono_editar.png'
import eliminar from '../../img/icono_eliminar.png'
import ModalIngresos from './ModalIngresos';



const TablaIngresos = () => {   
    const{modal, setModal, transacciones, setTransaccion,totalIngresado }=useContext(AppContext);
    const{cargarEmpresas, cargarIngresos, eliminarIngreso, calcularTotalIngreso }=PeticionesApi();
    
    //listar ingresos
    useEffect(()=>{
      
        cargarIngresos()  
        cargarEmpresas()
        calcularTotalIngreso()
      },[])

    //Eliminar ingresos
    const handleEliminarIngreso=async(idtransaccion)=>{
         await eliminarIngreso(idtransaccion);
        await cargarIngresos();
    }
    //modificar ingresos
    const modificarIngreso=(ig)=>{
        setTransaccion(ig)
        setModal(true)
    }    
    const handelAbrirModal=(e)=>{
        e.preventDefault();
        setModal(true)
        // calcularTotal();
    }
 
  
   
  return (
    <div className='contenido-tablaingresos'>
      <h3>Ingresos</h3>
      <div className='input-nuevoingreso'>
        <input
          type="submit"
          value="Nuevo Ingreso"
          onClick={handelAbrirModal}
        />
        </div>
      <div  className='tabla-ingresos'>
            <table>
                <thead>
                    <tr>           
                        <th width="37%">Concepto</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th width="20%">Empleado</th>
                        <th width="20%">Empresa</th>
                        <th >Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo'>   
                    {transacciones.map((ingr)=>(
                        <tr>                
                        <td>{ingr.concepto}</td>
                        <td>{ingr.monto}</td>
                        <td>{ingr.fecha}</td>
                        <td>{ingr.empleado.nombre}</td>
                        <td>{ingr.empresa.nombre}</td>
                        <td>
                            <img
                                src={editar}
                                onClick={()=>modificarIngreso(ingr)}                               
                            />
                            <img
                                src={eliminar}
                                onClick={()=>handleEliminarIngreso(ingr.idtransaccion)}
                            />
                        </td>
                    </tr>

                    ))}             
                   
                </tbody>
            </table>

            <div className='total-ingresos'>
                <p>Total: <span>{FormatoMoneda(totalIngresado)}</span></p>
            </div>
                {modal&& <ModalIngresos/>}
        </div>
    </div>
  )
}
// comentario
export default TablaIngresos
