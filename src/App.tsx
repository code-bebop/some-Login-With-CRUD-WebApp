import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./nomarlize.css";
import MainPage from "./pages/MainPage";
import ContentWrapper from "./components/ContentWrapper";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route path="/login" component={LoginPage} exact />
          <Route path="/register" component={RegisterPage} exact />
          <Route path="/" component={MainPage} exact />
          <Redirect to="/" />
        </Switch>
      </ContentWrapper>
    </>
  );
};

export default App;
