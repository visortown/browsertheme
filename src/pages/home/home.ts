import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openBrowser(url) {
    cordova.plugins.browsertab.themeable.openUrl(url, {toolbarColor:"#000000", closebuttoncaption : 'X', closeButtonEvent: 'closePressed'})
    }

}
