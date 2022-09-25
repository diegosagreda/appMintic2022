import { useEffect, useContext } from "react";
import { PeticionesApi } from "../../peticioneApi/PeticionesApi";
import {BallTriangle} from 'react-loader-spinner'
import './recargo.css'
import logo from '../../img/logo.png'

const Recargo = () => {

    const{iniciarSesion}=PeticionesApi();   

     useEffect(() => {
         const sesion=localStorage.getItem('sesion')
         if(sesion){
             const objetoSesion=JSON.parse(sesion)
             const{usuario, contraseña}=objetoSesion;
            console.log("usuario en linea:", usuario, contraseña ) 
            iniciarSesion(usuario, contraseña)
         }
       
      }, []); 
  return (
    
    <div className="modal-loader">  
        <div className="logo">
            <img
                src={logo}
            />
        </div> 
        <BallTriangle
            color="#FFF"
            height={90}
            width={90}
        />
      
    </div>
  )
}

export default Recargo
