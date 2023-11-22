import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Categories from './pages/Categories/Categories';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import PrivateRoute from './PrivateRoute';
import Community from './pages/Community/Community';
import Groupdesc from './pages/GroupDesc/Groupdesc';
import StartGroupQuestionsPage from './pages/StartGroupsQuestionsPage/StartGroupQuestionsPage';
import GeneralUserDetails from './components/GeneralUserDetails/GeneralUserDetails';
import GroupChatPage from './pages/GroupChat/GroupChatPage'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/general' element={<GeneralUserDetails/>}></Route>
        <Route path='/chat' element={<GroupChatPage/>}></Route>


        <Route element={<PrivateRoute/>}>
          <Route path='/questions/:id' element={<QuestionsPage/>}/>
          <Route path='/dashboard' element={<UserDashboard/>}/>
          <Route path='/groupdesc/:id' element={<Groupdesc/>}/>
          <Route path='/startgroup' element={<StartGroupQuestionsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;