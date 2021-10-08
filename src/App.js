import './App.css';
import Register from './Views/Register';
import LandingPage from './LandingPage';
import { Route } from 'react-router-dom';
import HeaderNoLogin from './Views/HeaderNoLogin';
import Login from './Views/Login';
import AllUsers from './Views/AllUsers';
import UpdateUsers from './Views/UpdateUsers';
import AddProduct from './Views/AddProduct';
import AllProducts from './Views/AllProducts';
import UpdateProducts from './Views/UpdateProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSales from './Views/AddSales';
import AllSales from './Views/AllSales';
import UpdateSales from './Views/UpdateSales';
import DashBoard from './Views/DashBoard';
import MyProducts from './Views/MyProducts';
import BuyProducts from './Views/BuyProducts';
import MakeSale from './Views/MakeSale';
function App() {

  return (

    <div className="App" >
      <HeaderNoLogin />
      
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Register/:id" component={Register} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/AllUsers" component={AllUsers} />
      <Route exact path="/UpdateUsers/:id" component={UpdateUsers} />
      <Route exact path="/AddProduct/:id" component={AddProduct} />
      <Route exact path="/AllProducts" component={AllProducts} />
      <Route exact path="/UpdateProducts/:id" component={UpdateProducts} />
      <Route exact path="/AddSales" component={AddSales} />
      <Route exact path="/AllSales" component={AllSales} />
      <Route exact path="/UpdateSales" component={UpdateSales} />
      <Route exact path="/DashBoard/:id" component={DashBoard} />
      <Route exact path="/MyProducts/:id" component={MyProducts} />
      <Route exact path="/BuyProducts/:id" component={BuyProducts} />
      <Route exact path="/MakeSale/:userid/:productid" component={MakeSale} />
    </div>);
}

export default App;
