import { Redirect, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Header from "./components/Header";
import "./nomarlize.css";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={LoginForm} exact />
        <Route path="/" component={Home} exact />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
