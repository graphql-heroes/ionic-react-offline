import React, { Component } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../components/PageHeader";

export class ManageTasks extends Component {
  render() {
    return (
      <IonPage>
        <PageHeader title="Manage Tasks" />
      </IonPage>
    );
  }
}

export default ManageTasks;
