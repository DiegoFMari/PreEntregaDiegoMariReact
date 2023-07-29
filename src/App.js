import './App.css';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo={"HOLA MUNDO!!!"}/>
    </div>
  );
}

export default App;
