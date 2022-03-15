import {Component} from '@angular/core';
import {environment} from "../environments/environment";
import {getApps, initializeApp} from "firebase/app";
import {getMessaging, getToken, onMessage} from "firebase/messaging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-notification';

  readonly VAPID_PUBLIC_KEY = "BKMmXHy8j5j_eE9bWJfu7pjq1c2Lnpmlp9ZoVeud37bSkiyueyZr2d9PnOghGQ4I2jFPzNklaFZWTOKSsORvtnY";

  constructor() {
    this.initFirebase();
    this.listen();
  }

  initFirebase() {
    if (getApps().length < 1) {
      const firebaseApp = initializeApp(environment.firebase);
      const messaging = getMessaging(firebaseApp);
      console.log({firebaseApp})

      navigator.serviceWorker.getRegistration().then(swr => {
        console.log('swr', swr)
        getToken(messaging, {
          vapidKey: this.VAPID_PUBLIC_KEY,
          serviceWorkerRegistration: swr
        }).then((currentToken) => {
            if (currentToken) {
              console.log('currentToken', currentToken);
            } else {
              console.log('No registration token available. Request permission to generate one.');
            }
          }
        ).catch(err => console.log('n error occurred while retrieving token.', err))
      }).catch(err => console.log('Service worker registration failed, error:', err));
    }
  }

  listen() {
      const messaging = getMessaging();
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
      });

      // console.log('onBackgroundMessage');
      // onBackgroundMessage(messaging, (payload) => {
      //   console.log('[firebase-messaging-sw.js] Received background message ', payload);
      // });
  }

}
