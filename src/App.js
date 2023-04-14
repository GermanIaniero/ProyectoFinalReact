import ItemListContainer from './components/Productos/ItemListContainer';
import './App.css';
import Error from './components/Productos/Error';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Carrito/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Productos/ItemDetailContainer';
import CartProvider from './components/Carrito/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/:categoryId' element={<ItemListContainer />} />
            <Route path='/notebooks/:categoryId' element={<ItemListContainer />} />
            <Route path='/pcs/:categoryId' element={<ItemListContainer />} />
            <Route path='/celulares/:categoryId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='.'>
          Tienda Isa
        </a>
      </div>
    </>

  );
}


export default App;