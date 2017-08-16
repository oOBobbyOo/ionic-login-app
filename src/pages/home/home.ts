import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
// import  firebase from 'firebase';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  provider = {
    loggedin: false,
    name: '',
    email: '',
    profilePicture: ''
  }

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
   
    this.provider.loggedin = this.navParams.get('loggedin');
    this.provider.name = this.navParams.get('name');
    this.provider.email = this.navParams.get('email');
    this.provider.profilePicture = this.navParams.get('profilePicture');
  }

  logout() {
    this.fire.auth.signOut();  
    this.provider.loggedin = false;
    this.navCtrl.setRoot(LoginPage);
  }

}
