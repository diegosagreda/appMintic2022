import React from 'react'
import TablaUsuario from './TablaUsuarios'
import './usuario.css'

const Usuarios = ({setModal, modal}) => {
  return (
    <div className='contenedor-usuario'>
       <header className='header-usuario'>
        <h2>Sistema de gestión de Empleados</h2>            
      </header>  

      <TablaUsuario
          setModal={setModal}
          modal={modal}
      />
    </div>
  )
}

export default Usuarios
