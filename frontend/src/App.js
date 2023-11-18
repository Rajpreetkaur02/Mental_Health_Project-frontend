import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Categories from './pages/Categories/Categories';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import MoodTracker from './components/MoodTracker/MoodTracker';
import PrivateRoute from './PrivateRoute';
import Community from './pages/Community/Community';
import Groupdesc from './pages/GroupDesc/Groupdesc';
import StartGroupQuestionsPage from './pages/StartGroupsQuestionsPage/StartGroupQuestionsPage';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/groupdesc/:id' element={<Groupdesc/>}/>
        <Route path='/startgroup' element={<StartGroupQuestionsPage/>}/>
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