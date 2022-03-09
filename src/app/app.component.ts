import { Component } from '@angular/core';
import {SwPush} from "@angular/service-worker";
import {NewsletterService} from "./newsletter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-notification';

  readonly VAPID_PUBLIC_KEY = "BPGjZKgbrhOAxo6rL3X6OM8yrp21IU7yLhKicERg1wTRE-44VxxHRIh8k7rm0TTZFmnD8NfMUttuOMfX2LJRHT8";

  constructor(
    private swPush: SwPush,
    private newsletterService: NewsletterService) {}

  subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
