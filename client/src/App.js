
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import Register from './components/Register/Register';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Support from './components/Support/Support';
//import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Routes>
        <Route exact path = '/' element = {<LoginPage/>}/>
        <Route exact path = '/Register' element = {<Register/>}/>
        <Route exact path = '/SignUp' element = {<SignUp/>}/>
        <Route exact path = '/home' element = {<Home/>}/>
        <Route exact path = '/profile' element = {<Profile/>}/>
        <Route exact path = '/support' element = {<Support/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
