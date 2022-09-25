import { useState, useRef, useContext, useEffect } from 'react'
import { PeticionesApi } from '../../peticioneApi/PeticionesApi';
import { AppContext } from '../../context/AppContex';
import './login.css'
import { BallTriangle } from 'react-loader-spinner';
import logo from '../../img/logo.png'
import ModalRegistro from './ModalRegistro';
import swal from 'sweetalert'

const Login = () => {
    const{iniciarSesion}=PeticionesApi();
    const [load, setLoad] = useState(false);

    const usuario1=useRef(null)
    const contraseña1=useRef(null)

    
    const handleIniciarSesion=async()=>{
        setLoad(true)
       await iniciarSesion(usuario1.current.value, contraseña1.current.value)
       setLoad(false)
    }
   
  return (    
    <div className='contenedor-login'>
       
        
        <div className='contenido-login'>
            <div className='logo'>
                <img
                    src={logo}
                />
            </div>
            <h2>Iniciar Sesión</h2>
            <div class="form">
                <input 
                type="text" id="email" className="form-input" autocomplete="off" placeholder=" "
                ref={usuario1}
                />
                <label htmlFor="email" class="form__label">Usuario</label>
            </div>
            <div class="form">
                <input 
                type="password" id="contrasena" className="form-input" autocomplete="off" placeholder=" "
                ref={contraseña1}
                />
                <label htmlFor="contrasena" class="form__label">Contraseña</label>
            </div>

            <div className='btn-ingresar'>


            {load? <BallTriangle color='#fff' width={35} height={35}/>:   
                <button
                    type="submit"                    
                    onClick={handleIniciarSesion}                
                >Iniciar Sesión</button>                    
            }
              
                         
            </div>
       
        </div>       
       
    </div>
  )
}

export default Login
