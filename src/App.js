import ReactDOM from 'react-dom'
import Newtimer from './newtimer.js'




function App() {
  return (
    <div className="App">
      
     <Newtimer/>
  
    </div>
  );
}

export default App;
ReactDOM.render(<Newtimer/>,document.getElementById("root"))