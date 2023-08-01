import './App.css';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='body'>
      <ItemListContainer saludo={"HOLA MUNDO!!!"}/>
      </div>
    </div>

  );
}

export default App;
