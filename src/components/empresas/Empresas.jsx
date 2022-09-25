import './empresa.css'
import TablaEmpresa from './TablaEmpresa'

const Empresas = ({modal, setModal}) => {
  return (
    <div className='contenedor-empresa'>
      <header className='header-empresa'>
        <h2>Sistema de gestión de Empresas</h2>            
      </header>  
      <TablaEmpresa
        modal={modal}
        setModal={setModal}
        
      />
    </div>
  )
}
export default Empresas
