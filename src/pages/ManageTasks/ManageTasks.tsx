import React, { Component } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonButton,
  IonContent,
  IonList,
  IonItemGroup,
  IonFooter,
  IonLabel,
  IonBadge,
  IonNote,
  IonItem,
  IonIcon
} from "@ionic/react";
import PageHeader from "../../components/PageHeader";
import "./ManageTasks.scss";

export class ManageTasks extends Component {
  /**
   * Navigate to new item add page
   */
  openNewItemPage = () => {};
  render() {
    return (
      <IonPage>
        <PageHeader title="Manage Tasks">
          <IonButtons slot="end">
            <IonButton onClick={this.openNewItemPage}>
              <IonIcon slot="icon-only" name="add" />
            </IonButton>
          </IonButtons>
        </PageHeader>
        <IonContent class="outer-content">
          <div
          // *ngIf="items"
          >
            <IonList>
              <IonItemGroup
              // *ngFor="let item of items; let last = last"
              // [class.last-item]="last"
              >
                <IonItem>
                  <IonLabel>
                    <h2>{/* { item.title } */}</h2>
                    <IonNote item-start>{/* {{ item.description }} */}</IonNote>
                    <br />
                    <IonNote>
                      <IonBadge color="primary">
                        {/* Server version: { item.version } */}
                      </IonBadge>
                    </IonNote>
                  </IonLabel>
                  <IonButton
                    item-start
                    class="create-button"
                    color="primary"
                    fill="outline"
                    // (click)="goToItem(item)"
                  >
                    <IonIcon
                    // name={"create"}
                    />
                  </IonButton>
                  <IonButton
                    item-end
                    class="trash-button"
                    color="primary"
                    fill="outline"
                    // (click)="deleteItem(item)"
                  >
                    <IonIcon name="trash" />
                  </IonButton>
                </IonItem>
              </IonItemGroup>
            </IonList>
          </div>
        </IonContent>

        <IonFooter>
          <div>
            <IonLabel>
              <IonButton
                size={"small"}
                color={"primary"}
                fill={"outline"}
                class="offline-queue-button"
              >
                Offline changes
              </IonButton>
              <IonBadge color="primary" class="offline-queue-badge">
                {/* {
        queue
      } */}
              </IonBadge>
            </IonLabel>
            <IonBadge
              class="network-badge"
              color="secondary"
              // *ngIf="online"
            >
              Online
            </IonBadge>
            <IonBadge
              class="network-badge"
              color="primary"
              // *ngIf="!online"
            >
              Offline
            </IonBadge>
          </div>
        </IonFooter>
      </IonPage>
    );
  }
}

export default ManageTasks;
