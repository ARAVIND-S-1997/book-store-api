
import './App.css';
import { Login } from "./loginPage"
import { Switch, Route } from "react-router-dom";
import { SignUp } from "./signUp";
import { ForgetPassword } from './forgetPassword';
import { Welcome } from "./welcome";
import { Bookslist} from "./homePage"
import {BooksInfo} from "./bookInfo"
import {Genre} from "./genre"
import { DisplayCart } from './displayCart';


function App() {
  return (
    <div className="App">
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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/forgetpassword">
          <ForgetPassword />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/cart">
          <DisplayCart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

