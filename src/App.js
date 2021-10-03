import './App.css';
import Register from './Views/Register';
import LandingPage from './LandingPage';
import { Route } from 'react-router-dom';
import HeaderNoLogin from './Views/HeaderNoLogin';
import Login from './Views/Login';
import AllUsers from './Views/AllUsers';
import UpdateUsers from './Views/UpdateUsers';
import AddProducts from './Views/AddProduct';
import AllProducts from './Views/AllProducts';
import UpdateProducts from './Views/UpdateProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSales from './Views/AddSales';
import AllSales from './Views/AllSales';
import UpdateSales from './Views/UpdateSales';
function App() {

  return (

    <div className="App" >
      <HeaderNoLogin />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/AllUsers" component={AllUsers} />
      <Route exact path="/UpdateUsers/:id" component={UpdateUsers} />
      <Route exact path="/AddProducts" component={AddProducts} />
      <Route exact path="/AllProducts" component={AllProducts} />
      <Route exact path="/UpdateProducts/:id" component={UpdateProducts} />
      <Route exact path="/AddSales" component={AddSales} />
      <Route exact path="/AllSales" component={AllSales} />
      <Route exact path="/UpdateSales" component={UpdateSales} />
    </div>);
}

export default App;
