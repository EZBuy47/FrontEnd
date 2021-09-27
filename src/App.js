import './App.css';
import Register from './Views/Register';
import LandingPage from './LandingPage';
import {Route} from 'react-router-dom';
import HeaderNoLogin from './Views/HeaderNoLogin';
import Login from './Views/Login';
import AllUsers from './Views/AllUsers';
import UpdateUsers from './Views/UpdateUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return( 
  
    <div className="App" >
  
  <HeaderNoLogin />
  <Route exact path  ="/" component={LandingPage}/>
  <Route exact path  ="/Register" component={Register}/>
  <Route exact path  ="/Login" component={Login}/>
  <Route exact path  ="/AllUsers" component={AllUsers}/>
  <Route exact path  ="/UpdateUsers/:email" component={UpdateUsers}/>
  </div>);
  }

export default App;
