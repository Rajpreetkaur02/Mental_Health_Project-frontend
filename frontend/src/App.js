import logo from './logo.svg';
import {Route , Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Categories from './pages/Categories';
import Resources from './pages/Resources';
import QuestionsPage from './pages/QuestionsPage';
import UserDashboard from './pages/UserDashboard';
import MoodTracker from './components/MoodTracker';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/categories' element={<Categories/>}></Route>
        <Route exact path='/resources' element={<Resources/>}></Route>
        <Route exact path='/questions/:id' element={<QuestionsPage/>}></Route>
        <Route exact path='/dashboard' element={<UserDashboard/>}></Route>
        <Route exact path='/moodtracker' element={<MoodTracker/>} ></Route>
      </Routes> 
    </div>
  );
}

export default App;