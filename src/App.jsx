import 'bootstrap/dist/css/bootstrap.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarComponents from './components/NavBarComponent/NavBarComponent';


function App() {
  return (
    <div style={{width: '100vw' , height: '100vh'}}>
      <NavBarComponents />
      <ItemListContainer greeting="Bienvenidos a mi Sucursal"/>
      
    </div>
  )
}

export default App
