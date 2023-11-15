import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Categories from './pages/Categories';
import Resources from './pages/Resources';
import QuestionsPage from './pages/QuestionsPage';
import UserDashboard from './pages/UserDashboard';
import MoodTracker from './components/MoodTracker';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path='/questions/:id' element={<QuestionsPage/>}/>
          <Route path='/dashboard' element={<UserDashboard/>}/>
          <Route path='/moodtracker' element={<MoodTracker/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;