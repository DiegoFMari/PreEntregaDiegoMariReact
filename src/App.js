import './App.css';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Component/CartContext/CartContext';
import Cart from './Component/Cart/Cart';
import { db } from './Firebase/firebase';
import Checkout from './Component/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />
            <Route path="/category/:categoryID" element={<ItemListContainer greeting="Bienvenido a la tienda!" />} />
            <Route path="/productos/:itemId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;