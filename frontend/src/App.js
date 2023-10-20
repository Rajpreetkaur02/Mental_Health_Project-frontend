import logo from './logo.svg';
import {Route , Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap"></div>



      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
