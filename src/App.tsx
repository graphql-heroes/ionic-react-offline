import { IonApp, IonSplitPane, IonPage } from "@ionic/react";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/menu/Menu";
import About from "./pages/about/About";
import ManageTasks from "./pages/manageTasks/ManageTasks";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

class App extends Component {
  client = new ApolloClient({
    link: createHttpLink({ uri: "http://localhost:4000/graphql" }),
    cache: new InMemoryCache()
  });
  render() {
    return (
      <ApolloProvider client={this.client}>
        <BrowserRouter>
          <IonApp>
            <IonSplitPane contentId="main">
              <Menu />
              <IonPage id="main">
                <Switch>
                  <Route path="/" component={ManageTasks} />
                  <Route path="tasks" component={About} />
                </Switch>
              </IonPage>
            </IonSplitPane>
          </IonApp>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
