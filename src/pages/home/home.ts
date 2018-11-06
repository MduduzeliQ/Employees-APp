import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Information } from './Storered/Info';
import List from '../array';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username:string;
password:string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

}


ToList(){
let a = new Information(this.username, this.password)
if (this.username == undefined && this.password == undefined){
  const alert = this.alertCtrl.create({
    title: 'Wrong Username of Password!',
    subTitle: 'Please enter your details correctly.',
    buttons: ['OK']
  });
  alert.present();
}
else{
  const alert = this.alertCtrl.create({
    title: 'Successfully Log In!',
    subTitle: 'Welcome.',
    buttons: ['OK']
  });
  alert.present();
  this.navCtrl.push(RegisterPage);
  List.push(a);
  console.log(List);


}

}
}
