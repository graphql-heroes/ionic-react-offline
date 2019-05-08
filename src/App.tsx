import { IonApp, IonSplitPane, IonPage } from "@ionic/react";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/menu/Menu";
import About from "./pages/About";
import ManageTasks from "./pages/ManageTasks";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <IonApp>
          <IonSplitPane contentId="main">
            <Menu />
            <IonPage id="main">
              <Switch>
                <Route path="/" component={About} />
                <Route path="/tasks" component={ManageTasks} />
              </Switch>
            </IonPage>
          </IonSplitPane>
        </IonApp>
      </BrowserRouter>
    );
  }
}

export default App;
