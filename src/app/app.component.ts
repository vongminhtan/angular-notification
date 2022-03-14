import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import { getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-notification';

  readonly VAPID_PUBLIC_KEY = "BKATQCXQHnMeEbS0ZFSkIA5S-3prNq68hcfGiBM808qHsPAp03BvbItKU-UubWkcOnyZMWlpUlj640kjUEGatNU";

  constructor(
  ) {
    if (getApps().length < 1) {
      const firebaseApp =  initializeApp(environment.firebase);
      const messaging = getMessaging(firebaseApp);
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

}
