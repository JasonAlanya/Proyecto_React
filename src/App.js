/*import NavBar from './Componentes/NavBar';
import Contador from './Componentes/Contador'
import Item_list_container from './Componentes/Item_list_container'*/
import React from 'react'
import AppRouter from './Routers/AppRouter';
import {CartProvider} from './Context/Cartcontext'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AppRouter/>
        {/*<NavBar/>
        <Contador stock="10" inicial="1" />
        <Item_list_container/>*/}
      </CartProvider>
    </div>
  );
}

export default App;
