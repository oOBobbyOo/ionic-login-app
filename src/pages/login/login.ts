import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('email') email;
	@ViewChild('password') password;

	provider = {
		loggedin: false,
		name: '',
		email: '',
		profilePicture: ''
	}

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  signIn() {
  	this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
  	.then( res => {
  		this.provider.loggedin = true;
  		this.provider.name = res.displayName;
  		this.provider.email = res.email;
  		this.provider.profilePicture = res.photoURL;
  		console.log('from Email', res);
  		this.showAlert('Success! you\'re logged in by Email');
    	this.navCtrl.setRoot(HomePage, this.provider);
  	})
  	.catch( error => {
  		console.log('got error',error);
  		this.showAlert(error.message);
  	});
  }

  register() {
  	this.navCtrl.push(RegisterPage);
  }

  loginWithFacebook() {
  	this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  	.then( res => {
  		this.provider.loggedin = true;
  		this.provider.name = res.user.displayName;
  		this.provider.email = res.user.email;
  		this.provider.profilePicture = res.user.photoURL;
  		console.log('from Facebook', res);
  		this.showAlert('Success! you\'re logged in by Facebook');
  		this.navCtrl.setRoot(HomePage, this.provider);
  	});
  }

  loginWithGoogle() {
  	this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  	.then( res => {
  		this.provider.loggedin = true;
  		this.provider.name = res.user.displayName;
  		this.provider.email = res.user.email;
  		this.provider.profilePicture = res.user.photoURL;
  		console.log('from Google',res);
  		this.showAlert('Success! you\'re logged in by Google');
  		this.navCtrl.setRoot(HomePage, this.provider);
  	});
  }

  loginWithTwitter() {
  	this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
  	.then( res => {
  		this.provider.loggedin = true;
  		this.provider.name = res.user.displayName;
  		this.provider.email = res.user.email;
  		this.provider.profilePicture = res.user.photoURL;
  		console.log('from Twitter',res);
  		this.showAlert('Success! you\'re logged in by Twitter');
  		this.navCtrl.setRoot(HomePage, this.provider);
  	});
  }

  loginWithGithub() {
  	this.fire.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
  	.then( res => {
  		this.provider.loggedin = true;
  		this.provider.name = res.user.displayName;
  		this.provider.email = res.user.email;
  		this.provider.profilePicture = res.user.photoURL;
  		console.log('from Github',res);
  		this.showAlert('Success! you\'re logged in by Github');
  		this.navCtrl.setRoot(HomePage, this.provider);
  	});
  }



}
