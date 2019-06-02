import React, { Component } from "react";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/react";
import PageHeader from "../../components/PageHeader";

export class About extends Component {
  render() {
    return (
      <IonPage>
        <PageHeader title="About" />
        <IonContent padding>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Purpose of this application</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              This app demonstrates how to use the AeroGear Mobile services,
              backed by OpenShift to perform a wide range of common mobile tasks
              such as Data Synchronisation, Identity Management, Device
              Security, Metrics Capture, Push Notifications and more.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Data Synchronization</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div>
                <p>
                  Data Sync is a JavaScript framework that developers can use to
                  add real time synchronization and enhanced offline
                  capabilities to their mobile applications.
                </p>
                <ul>
                  <li>Real Time Synchronisation</li>
                  <li>Conflict Resolution</li>
                  <li>Robust offline experience</li>
                  <li>
                    Authentication and Authorization (using the Identity
                    Management service)
                  </li>
                  <li> Metrics (using the AeroGear Mobile Metrics Service)</li>
                  <li> Audit Logging</li>
                </ul>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Identity Management</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                The Identity Management SDK allows you to add authentication and
                authorization to your mobile app.
              </p>
              <ul>
                <li>
                  Secure your mobile app using the industry standard OpenID
                  Connect protocol
                </li>
                <li>
                  Add access control to your app based on user’s group
                  membership
                </li>
                <li>
                  Easily implement SSO, multi factor authentication and Social
                  Login support
                </li>
                <li>
                  Back end support for identity brokering and user federation.
                </li>
              </ul>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Device Security</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                The Device Security SDK allows you to easily configure and
                manage device security, and trust checks for your mobile app.
                Developers can perform a range of device trust checks on the
                mobile device such as checking if the device is rooted and
                allows you take proactive action based on the results.
              </p>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Push Notifications</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                The Push Notifications service allows you send native push
                notifications to different mobile operating systems.
              </p>
              <ul>
                <li>
                  Code once and send push notifications to iOS and Android
                </li>
                <li>Push notifications to defined groups</li>
                <li>Push notifications to either iOS only or Android only</li>
                <li>
                  Push notifications to different variants of a mobile app
                </li>
                <li>
                  Push notifications from different back-end apps to the same
                  mobile app
                </li>
              </ul>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Metrics</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                The Mobile Metrics service allows you gather metrics on mobile
                apps, device versions, device security checks and back-end
                mobile service usage.
              </p>
              <ul>
                <li>
                  Monitor usage by version of mobile app, platform and SDK
                </li>
                <li>
                  Monitor interactions with the Identity Management service
                </li>
              </ul>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>More information</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                For further information, visit:
                <br />
                <a href="https://www.aerogear.org/">www.aerogear.org</a>
              </p>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
}

export default About;
