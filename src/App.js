import NavBar from './Componentes/NavBar';
import Contador from './Componentes/Contador'
//import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Contador stock="10" inicial="1" />
    </div>
  );
}

export default App;
