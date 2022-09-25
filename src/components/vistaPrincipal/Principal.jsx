import './principal.css'
import iconoingresogasto from '../../img/icono-ingresosgastos.png'
import iconousuarios from '../../img/icono-usuarios.png'
import iconoempresas from '../../img/icono-empresas.png'


const Principal = () => {


  return (
    <main className='contenido-main'>
        <h2>Sistema de control de ingresos y egresos</h2>

        <div className='iconos-main'>
            <img
                src={iconoingresogasto}
              
            />
            <img
                src={iconousuarios}
            />
            <img
                src={iconoempresas}
            />
          

        </div>

    </main>
    
  )
}

export default Principal
