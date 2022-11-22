import './App.css';
import Square from './Square';


function App() {
  const strVar = 'Hello World'
  return (
    <div className="App">
      <Square str={strVar}/>
    </div>
  );
}

export default App;
