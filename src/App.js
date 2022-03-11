import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Pages/Home'

function App() {
  return (
    <div className="App">
         <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
