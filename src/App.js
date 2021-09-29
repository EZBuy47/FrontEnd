import './App.css';
import Register from './Views/Register';
import LandingPage from './LandingPage';
import {Route} from 'react-router-dom';
import HeaderNoLogin from './Views/HeaderNoLogin';
import Login from './Views/Login';
import AllUsers from './Views/AllUsers';
<<<<<<< Updated upstream
import UpdateUsers from './Views/UpdateUsers';
import AddProducts from './Views/AddProduct';
import AllProducts from './Views/AllProducts';
import UpdateProducts from './Views/UpdateProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import prueba from './Views/prueba';
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> Stashed changes
function App() {

  return( 
  
    <div className="App" >
  
  <HeaderNoLogin />
  <Route exact path  ="/" component={LandingPage}/>
  <Route exact path  ="/Register" component={Register}/>
  <Route exact path  ="/Login" component={Login}/>
  <Route exact path  ="/AllUsers" component={AllUsers}/>
<<<<<<< Updated upstream
  <Route exact path  ="/UpdateUsers/:email" component={UpdateUsers}/>
  <Route exact path  ="/AddProducts" component={AddProducts}/>
  <Route exact path  ="/AllProducts" component={AllProducts}/>
  <Route exact path  ="/UpdateProducts/:id" component={UpdateProducts}/>
=======
  <Route exact path  ="/prueba" component={prueba}/>

>>>>>>> Stashed changes
  </div>);
  }

export default App;
