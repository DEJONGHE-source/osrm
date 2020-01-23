import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'user-space',
  templateUrl: './user-space.page.html',
  styleUrls: ['./user-space.page.scss'],
})
export class UserSpacePage implements OnInit {
  connected=null
  first_name=null
  last_name=null
  numberOfSeances=0
  constructor(public connectedService : AuthenticateService) { }

  ngOnInit() {


  }

  async ionViewWillEnter(){
    this.numberOfSeances=0
      this.getConnected().then(()=>{
      console.log("connected ou pas");
      if(this.connected != null && this.connected!=undefined){
        console.log("connecté")
        const snapshot = firebase.firestore().collection('/seances').where("id_user","==",this.connected.uid).get()
        snapshot.docs.map(doc => {
          if(doc.data().id_user==this.connected.uid){

            this.numberOfSeances=this.numberOfSeances+1;
          }else{
          }
        });
        const snapshot1 = firebase.firestore().collection('/utilisateurs').where("id_user","==",this.connected.uid).get()
        snapshot1.docs.map(doc => {
          this.first_name=doc.data().first_name;
          this.last_name=doc.data().last_name;
        });
        return 'true';
      }else{
        console.log('non connecté')
        return 'false';
      }
    });


  }
  getConnected = ()=>{
    return new Promise((resolve,reject) => {
      this.connected=this.connectedService.userDetails();
      resolve( "cest bon")
    });
  }


}
