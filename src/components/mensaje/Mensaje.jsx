import './mensaje.css'

const Mensaje = ({children}) => {
  return (
    <div className="mensaje-alerta">
      <p>{children}</p>
    </div>
  )
}

export default Mensaje
