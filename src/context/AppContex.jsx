import { createContext, useState } from "react";
export const AppContext=createContext();


export const DataProvider=({children})=>{
    const [usuario, setUsuario] = useState({});
    const [empresas, setEmpresas] = useState([]);
    const [empresa, setEmpresa] = useState({});
    const [empleados, setEmpleados] = useState([]);
    const [empleado, setEmpleado] = useState({});
    const [mensaje, setMensaje] = useState(false);
    const [modal, setModal] = useState(false);
    const [transacciones, setTransacciones] = useState([]);
    const [transaccion, setTransaccion] = useState({
        empresa: {
            nitempresa:0            
        }
    });
    const [totalIngresado, setTotalIngresado] = useState(0);
    const [totalEgresado, setTotalEgresado] = useState(0);
    const [logueado, setLogueado] = useState(false);  
    const [pagina, setPagina] = useState("principal")

    return(
        <AppContext.Provider value={{
            usuario, setUsuario,
            empresas, setEmpresas,
            empresa, setEmpresa,
            mensaje, setMensaje,
            empleados, setEmpleados,
            empleado, setEmpleado,
            modal, setModal,
            transacciones, setTransacciones,
            transaccion, setTransaccion,
            totalIngresado, setTotalIngresado,
            totalEgresado, setTotalEgresado,
            logueado, setLogueado,
            pagina, setPagina

        }}>{children}</AppContext.Provider>

    )
}