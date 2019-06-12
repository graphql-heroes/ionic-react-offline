import React, { Component } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/PageHeader";

export class Home extends Component {
  render() {
    return (
      <IonPage>
        <PageHeader title="home" />
      </IonPage>
    );
  }
}

export default Home;
