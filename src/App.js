import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Info from './pages/info/Info';
import Add from './pages/add-on/Add';
import Plan from './pages/plan/Plan';
import Summary from './pages/summary/Summary';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Info/>} />
        <Route path="/" element={<Add/>} />
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/" element={<Summary/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
