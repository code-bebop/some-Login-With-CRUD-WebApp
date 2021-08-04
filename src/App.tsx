import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./nomarlize.css";
import MainPage from "./pages/MainPage";
import ContentWrapper from "./components/ContentWrapper";
import LoginPage from "./pages/AuthPage";

const App = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route path="/auth/:auth" component={LoginPage} exact />
          <Route path="/" component={MainPage} exact />
          <Redirect to="/" />
        </Switch>
      </ContentWrapper>
    </>
  );
};

export default App;
