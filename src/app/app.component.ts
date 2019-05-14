import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { Push, PushOptions, PushObject } from '@ionic-native/push/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Articles',
      url: '/articles',
      icon: 'attach'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
    // private push: Push
  ) {
    this.initializeApp();

    /*this.push.hasPermission().then(
      (o: any) => {
        if (!o.isEnabled) {
          console.log("Vous n'avez pas activez les notifs");
        }
      }
    );*/

    // listner
    /*this.push.createChannel({
      id: 'id_de_la_connexion',
      description: 'chaine 1 de connexion',
      importance: 3 // de 1 à 4
    }).then(
      () => console.log('channel créée')
    );

    // pour del
    // this.push.deleteChannel('id_de_la_connexion').then( () => console.log('connexion fermée'));

    const options: PushOptions = {
      android: {},
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true',
        fcmSandbox: 'dsfdsfsf'
      },
      browser: {
        pushServiceURL: 'http://fdsfdsfsdfsdf'
      }
    };


    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => console.log('reception', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('device enregisré', registration));

    pushObject.on('error').subscribe(error => console.error('Erreur', error));
*/

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
