import NavBar from './Componentes/NavBar';
import Contador from './Componentes/Contador'
import Item_list_container from './Componentes/Item_list_container'
//import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Contador stock="10" inicial="1" />
      <Item_list_container/>
    </div>
  );
}

export default App;
