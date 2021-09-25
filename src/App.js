import './App.css';
import Register from './Views/Register';
import LandingPage from './LandingPage';
import {Route} from 'react-router-dom';
import HeaderNoLogin from './Views/HeaderNoLogin';
import Login from './Views/Login';
import AllUsers from './Views/AllUsers';

function App() {

  return( 
  
    <div className="App" >
  
  <HeaderNoLogin />
  <Route exact path  ="/" component={LandingPage}/>
  <Route exact path  ="/Register" component={Register}/>
  <Route exact path  ="/Login" component={Login}/>
  <Route exact path  ="/AllUsers" component={AllUsers}/>

  </div>);
  }

export default App;
