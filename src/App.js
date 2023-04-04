import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter,  Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'; 
import Error from "./components/Error";
import Loader from './components/spiner/Loader';
import Products from './components/Firebase/Products';

function App() { 
  return (
     <div>     
       
        <BrowserRouter>
          <NavBar />
          <Routes>
                <Route path={"/"} element={<ItemListContainer />} />
                <Route path={"/category/:id"} element={<ItemListContainer />} />
                <Route path= {"/item/:id"} element={<ItemDetailContainer />} />
                <Route path= '*' exact element={<Error />} />
          </Routes>           
        </BrowserRouter>

        <Products/>
        <Loader/>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='.'>
          Tienda Isa
        </a>
      </div>
    </div>
    
  );
}


export default App;