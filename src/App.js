import './App.css';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Component/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path = '/' element={<ItemListContainer/>}/>
        <Route path = '/category/:categoryID' element={<ItemListContainer/>}/>
        <Route path="/productos/:productoId" element={<ItemDetailContainer />} />
        <Route path = '*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;



{/* <div className="App">
<NavBar/>
<div className='body'>
<ItemListContainer saludo={"HOLA MUNDO!!!"}/>
<ItemDetailContainer/>
</div>
</div> */}
