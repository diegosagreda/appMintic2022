import {useState,useEffect,useContext} from 'react';
import './ingresosGastos.css';
import TablaIngresos from './TablaIngresos';
import TablaEgresos from './TablaEgresos';
import {PeticionesApi} from '../../peticioneApi/PeticionesApi';
import { AppContext } from '../../context/AppContex';

const IngresosGastos = () => {  
  const [tablaGastos, setTablaGastos] = useState("tablaIngresos");
  const {calcularTotalIngreso,calcularTotalEgreso} = PeticionesApi();
  const {transacciones} = useContext(AppContext);

/*   useEffect(()=>{
    calcularTotalIngreso()
  },[transacciones])
   */
  const handleIngresos=(e)=>{
    e.preventDefault();
    setTablaGastos("tablaIngresos")
    //calcularTotalIngreso()
  }
  const handleEgresos=(e)=>{
    e.preventDefault();
    setTablaGastos("tablaEgresos")
    //calcularTotalEgreso()
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
