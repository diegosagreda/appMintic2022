import './modalEgresos.css'
import { useState, useContext, useRef } from 'react'
import { AppContext } from '../../context/AppContex';
import icono_cerrar from '../../img/cerrar.svg'
import Mensaje from '../mensaje/Mensaje';
import { PeticionesApi } from '../../peticioneApi/PeticionesApi';

const ModalEgresos = () => {
    const{setModal, mensaje, empresas, usuario, transaccion, setTransaccion}=useContext(AppContext);
    const{añadirEgreso, cargarEgresos, actualizarEgreso}=PeticionesApi();
    const nitempresa=useRef(null);
    const [infEgreso, setInfEgreso] = useState({
        idtransaccion:transaccion.idtransaccion? transaccion.idtransaccion:"",
        tipo:"Egreso",
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
        setInfEgreso({
            ...infEgreso, [e.target.name]:e.target.value
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

    const handleAñadirEgreso=async(e)=>{
        e.preventDefault();
        console.log("Empresa seleccionada:", nitempresa.current.value )
        if(transaccion.idtransaccion){
            infEgreso.empleado.cedulaempleado=transaccion.empleado.cedulaempleado;
            infEgreso.empresa.nitempresa=parseInt(nitempresa.current.value);
            await actualizarEgreso(infEgreso)
        }else{
            infEgreso.empresa.nitempresa=parseInt(nitempresa.current.value)
            infEgreso.empleado.cedulaempleado=parseInt(usuario.empleado.cedulaempleado)
            await añadirEgreso(infEgreso); 
        }        
        setModal(false)
        setTransaccion({
            empresa: {
                nitempresa:0            
            }
        })
        await cargarEgresos();       
    } 
  return (
    <div className='contenedor-modalegresos'>
        <div className='cerrar-modal'>
            <img
                src={icono_cerrar}
                alt="icono-cerrar"
                onClick={handleCerrar}
            />

        </div>
        <div className='contenido-egresos'>       
        {transaccion.idtransaccion? <h1>Modificar Egreso</h1>: <h1>Agregar Egreso</h1>} 
                <form className='formulario-egresos'>
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
                        onClick={handleAñadirEgreso}

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

export default ModalEgresos
