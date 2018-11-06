import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import List from '../array';
import { AlertController } from 'ionic-angular';
import { Well } from '../Welcome';


/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {
Name:string;
Sname:string;
Identification:string;
EmployeeRole:string;


arry=List;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }
delete(a: any){
List.splice(a,1);
console.log("Remove")
  }
  
  showPrompt(mdu) {
    const prompt = this.alertCtrl.create({
      title: 'Updating',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'Name',
          placeholder: 'Enter Name'
        },
        {
          name: 'Surname',
          placeholder: 'Enter Surname'
        },
        {
          name: 'Identity',
          placeholder: 'Enter Identity'
        },
        {
          name: 'Role',
          placeholder: 'Enter Role'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let a = new Well(data.Name,data.Surname,data.Identity,data.Role);
            this.arry.splice(mdu,1,a);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
    List.push();
  }
}
