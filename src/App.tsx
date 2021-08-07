import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./nomarlize.css";
import MainPage from "./pages/MainPage";
import ContentWrapper from "./components/ContentWrapper";
import LoginPage from "./pages/AuthPage";
import styled from "styled-components";
import LoginProvider from "./globalState";

const AppBlock = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 100px 1fr;
`;

const App = () => {
  return (
    <LoginProvider>
      <AppBlock>
        <Header />
        <ContentWrapper>
          <Switch>
            <Route path="/auth/:auth" component={LoginPage} exact />
            <Route path="/" component={MainPage} exact />
            <Redirect to="/" />
          </Switch>
        </ContentWrapper>
      </AppBlock>
    </LoginProvider>
  );
};

export default App;
