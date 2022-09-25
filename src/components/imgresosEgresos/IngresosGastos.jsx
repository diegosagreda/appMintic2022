import {useState} from 'react';
import { AppContext } from '../../context/AppContex';
import './ingresosGastos.css';
import TablaIngresos from './TablaIngresos';
import TablaEgresos from './TablaEgresos';

const IngresosGastos = () => {  
  const [tablaGastos, setTablaGastos] = useState("tablaIngresos");
  
  const handleIngresos=(e)=>{
    e.preventDefault();
    setTablaGastos("tablaIngresos")
    return
  }
  const handleEgresos=(e)=>{
    e.preventDefault();
    setTablaGastos("tablaEgresos")
    return
  }

  return (
    <div  className='contenedor-ingresosgastos'>
      <header className='header-ingresosgastos'>
        <h2>Sistema de gestión de Ingresos y Gastos</h2>       
        <nav className='nav-ingresosgastos'>
          <a href='#' 
          onClick={handleIngresos} 
          >Ingresos</a>
          <a href='#'
          onClick={handleEgresos}
          >Egresos</a>
        </nav>      
      </header>    
      {tablaGastos==="tablaIngresos"? <TablaIngresos/>:""}
      {tablaGastos==="tablaEgresos"? <TablaEgresos/>:""}
      </div>
  )
}

export default IngresosGastos
