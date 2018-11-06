import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import List from  '../array';
import { DataPage } from '../data/data';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
Name:string;
Sname:string;
Identification:string;
EmployeeRole:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  Cleaning(){
  this.Name = '';
  this.Sname = '';
  this.Identification = '';
  this.EmployeeRole = '';

  }
ToRetrieve(){
let a = new Register(this.Name, this.Sname, this.Identification, this.EmployeeRole)

if (this.Name == "" && this.Sname == "" && this.Identification == "" && this.EmployeeRole == "" ){
  const alert = this.alertCtrl.create({
    title: 'Enter yor details to register!',
    subTitle: 'Please enter your details correctly.',
    buttons: ['OK']
  });
  alert.present();
}
else{
  this.navCtrl.push(DataPage);
  List.push(a);
  console.log(List);
}
}

}


export class Register {
Name:string;
Sname:string;
Identification:string;
EmployeeRole:string;
 
constructor(Name:string,Sname:string,Identification:string,EmployeeRole:string){
this.Name = Name;
this.Sname = Sname;
this.Identification = Identification;
this.EmployeeRole = EmployeeRole; 
  }
}
