
// files imports
import './App.css';
import { Navbar } from './navbar';
import { Login } from "./loginPage"
import { Switch, Route } from "react-router-dom";
import { SignUp } from "./signUp";
import { ForgetPassword } from './forgetPassword';
import { Bookslist } from "./homePage"
import { BooksInfo } from "./bookInfo"
import { Genre } from "./genre"
import { DisplayCart } from './displayCart';
import { Useraddress } from './AddressManager';
import { Changepassword } from './changepassword';
import { Orderpage } from "./orderpage"
import { Editaddress } from './editaddress';
import { Confirmorder } from './orderplaced';

// root componenet
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Bookslist />
        </Route>
        <Route exact path="/allbooks/:genre">
          <Genre />
        </Route>
        <Route exact path="/book/:id">
          <BooksInfo />
        </Route>
        <Route exact path="/cart">
          <DisplayCart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/forgetpassword">
          <ForgetPassword />
        </Route>
        <Route exact path="/useraddress">
          <Useraddress />
        </Route>
        <Route exact path="/editaddress">
          <Editaddress />
        </Route>
        <Route exact path="/changepassword/:token">
          <Changepassword />
        </Route>
        <Route exact path="/orderdashboard">
          <Orderpage />
        </Route>
        <Route exact path="/orderpage">
          <Confirmorder />
        </Route>
      </Switch>
    </div>
  );
}



