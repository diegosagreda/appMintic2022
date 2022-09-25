import { useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../context/AppContex';
import { PeticionesApi } from '../../peticioneApi/PeticionesApi';
import { FormatoMoneda } from '../../helpers/helpers';
import './modalEgresos.css'
import icono_cerrar from '../../img/cerrar.svg'
import Mensaje from '../mensaje/Mensaje';


const ModalIngresos = () => {
    const{setModal, mensaje, empresas, usuario, transaccion, setTransaccion}=useContext(AppContext);
    const{añadirIngreso, cargarIngresos, actualizarIngreso}=PeticionesApi();
    const nitempresa=useRef(null)    
    const [infIngreso, setInfIngreso] = useState({
        idtransaccion:transaccion.idtransaccion? transaccion.idtransaccion:"",
        tipo:"Ingreso",
        monto: transaccion.monto? transaccion.monto:"",
        concepto: transaccion.concepto? transaccion.concepto:"",
        fecha: transaccion.fecha? transaccion.fecha:"",
         empresa: {
             nitempresa:""
         },
        empleado: {
            cedulaempleado:""
        }
    }
    );   
    const handleOnchange=(e)=>{
        setInfIngreso({
            ...infIngreso, [e.target.name]:e.target.value
           
    })}
    
    const handleCerrar=(e)=>{
        e.preventDefault();
        setModal(false)
        setTransaccion({
            empresa: {
                nitempresa:0            
            }
        })    
    }

    const handleAñadir=async(e)=>{
        e.preventDefault();
        console.log("Empresa seleccionada:", nitempresa.current.value )
        if(transaccion.idtransaccion){
            infIngreso.empleado.cedulaempleado=transaccion.empleado.cedulaempleado;
            infIngreso.empresa.nitempresa=parseInt(nitempresa.current.value);
            await actualizarIngreso(infIngreso)
        }else{
            infIngreso.empresa.nitempresa=parseInt(nitempresa.current.value)
            infIngreso.empleado.cedulaempleado=parseInt(usuario.empleado.cedulaempleado)
            await añadirIngreso(infIngreso); 
        }        
        setModal(false)
        setTransaccion({
            empresa: {
                nitempresa:0            
            }
        })
        await cargarIngresos();       
    }   
  return (
    <div className='contenedor-modalingresos'>
        <div className='cerrar-modal'>
            <img
                src={icono_cerrar}
                alt="icono-cerrar"
                onClick={handleCerrar}
            />

        </div>
        <div className='contenido-ingresos'>
        {transaccion.idtransaccion? <h1>Modificar Ingreso</h1>: <h1>Agregar Ingreso</h1>}  
                <form className='formulario-ingresos'>
                    <label>Monto</label>
                    <input
                        type="number"
                        name='monto'
                        defaultValue={transaccion.monto? transaccion.monto:""}
                        onChange={handleOnchange}
                    />
                    <label>Concepto</label>
                    <input
                        type="String"
                        name='concepto'
                        defaultValue={transaccion.concepto? transaccion.concepto:""}
                        onChange={handleOnchange}
                    />
                    <label>Empresa</label>
                    <select
                        ref={nitempresa}                      
                     >
                        <option>--Seleccionar--</option>
                       {empresas.map(empr=>(
                            <option    
                               value={empr.nitempresa}
                               selected={transaccion.empresa.nitempresa===empr.nitempresa? true:false}                            
                            >{empr.nombre}</option>
                        ))} 
                    </select>
                    <label>Fecha</label>
                    <input
                        type="date"
                        name='fecha'
                        defaultValue={transaccion.fecha?transaccion.fecha:""}
                        onChange={handleOnchange}

                    />
                    <div className='input-ingreso'>
                    <input
                        type="submit"
                        value={transaccion.idtransaccion? "Modificar":"Añadir" }
                        onClick={handleAñadir}
                    />
                    </div>

                    {mensaje && <Mensaje>
                        <p>Todos los campos son obligatorios</p>
                    </Mensaje>}

                </form>
        </div>
    </div>
  )
}

export default ModalIngresos
