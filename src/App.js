
import './App.css';
import { Login } from "./loginPage"
import { Switch, Route} from "react-router-dom";
import { SignUp } from "./signUp";
import { ForgetPassword } from './forgetPassword';
import {Welcome} from "./welcome";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/forgetpassword">
                    <ForgetPassword />
                </Route>
                <Route  exact path="/signup">
                    <SignUp />
                </Route>
                <Route  exact path="/welcome">
                    <Welcome/>
                </Route>
            </Switch>
    </div>
  );
}

export default App;

