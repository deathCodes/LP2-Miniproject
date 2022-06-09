import MainComponent from "./components/Main/MainComponent";
import { BrowserRouter as Router} from 'react-router-dom'


import './App.css';

function App() {
  return (
    <Router>

    <div className="App">

      <MainComponent/>
    </div>
    </Router>
  );
}

export default App;
