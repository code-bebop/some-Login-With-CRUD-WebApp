import { Redirect, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} exact />
      <Route path="/" component={Home} exact />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
