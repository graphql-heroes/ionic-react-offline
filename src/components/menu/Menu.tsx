import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonMenuToggle,
  IonIcon,
  IonLabel
} from "@ionic/react";
import "./menu.css";
import aerogearLogo from "../../assets/img/aerogear.png";

const Menu = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonAvatar item-start class="banner">
              <img src={aerogearLogo} />
            </IonAvatar>
            <div
            // *ngIf="user"
            >
              {/* <h2>{ user.firstName } { user.lastName }</h2>
              <h5>{ user.email }</h5> */}
            </div>
            <div
            // *ngIf="!user"
            >
              <h2>AeroGear</h2>
            </div>
          </IonItem>
          <IonMenuToggle auto-hide="false">
            <IonItem>
              <IonIcon slot="start" name="home" />
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem>
              <IonIcon slot="start" name="build" />
              <IonLabel>Manage Tasks</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem>
              <IonIcon slot="start" name="person" />
              <IonLabel>User Profile</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem>
              <IonIcon slot="start" name="document" />
              <IonLabel>Files</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem>
              <IonIcon slot="start" name="settings" />
              <IonLabel>Device Security</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem>
              <IonIcon slot="start" name="settings" />
              <IonLabel>Settings</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem>
              <IonIcon slot="start" name="book" />
              <IonLabel>About</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
