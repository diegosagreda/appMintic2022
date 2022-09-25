import {useEffect, useContext} from 'react'
import { AppContext } from '../../context/AppContex';
import { PeticionesApi } from '../../peticioneApi/PeticionesApi';
import './tablaEgresos.css'
import editar from '../../img/icono_editar.png'
import eliminar from '../../img/icono_eliminar.png'
import ModalEgresos from './ModalEgresos';
import {FormatoMoneda} from '../../helpers/helpers'

const TablaEgresos = () => {
    const{modal, setModal, transacciones, setTransaccion, totalEgresado}=useContext(AppContext);
    const{cargarEgresos, cargarEmpresas, eliminarEgreso, calcularTotalEgreso}=PeticionesApi();

    //listar agresos
    useEffect(()=>{
       
        cargarEgresos()  
        cargarEmpresas()
        calcularTotalEgreso()
    },[transacciones]) 
    
    //Eliminar egresos
    const handleEliminarEgreso=async(idtransaccion)=>{
        await eliminarEgreso(idtransaccion);
       await cargarEgresos();
   }
   //Modificar egresos
   const modificarEgreso=(eg)=>{
        setTransaccion(eg);
        setModal(true);   
   }

    const handelAbrirModal=(e)=>{
        e.preventDefault();
        setModal(true)
        return
    }
  return (
    <div className='contenido-tablaegresos'>
      <h3>Egresos</h3>
      <div className='input-nuevoegreso'>
        <input
          type="submit"
          value="Nuevo Egreso"
          onClick={handelAbrirModal}
          
        />
        </div>
      <div  className='tabla-egresos'>
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
                {transacciones.map(egr=>(
                    <tr>                
                        <td>{egr.concepto}</td>
                        <td>{egr.monto}</td>
                        <td>{egr.fecha}</td>
                        <td>{egr.empleado.nombre}</td>
                        <td>{egr.empresa.nombre}</td>
                        <td>
                            <img
                                src={editar}
                                onClick={()=>modificarEgreso(egr)}                               
                            />
                            <img
                                src={eliminar}
                                onClick={()=>handleEliminarEgreso(egr.idtransaccion)}
                            />
                        </td>
                    </tr>
                ))}
                        
                   
                  
                   
                </tbody>
            </table>
            <div className='total-egresos'>
                <p>Total: <span>{FormatoMoneda(totalEgresado)}</span></p>
            </div>

            {modal && <ModalEgresos/>}
        </div>+
    </div>
  )
}

export default TablaEgresos
