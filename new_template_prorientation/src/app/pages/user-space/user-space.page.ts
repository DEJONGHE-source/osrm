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
  constructor(public connectedService : AuthenticateService) { }

  ngOnInit() {


  }

  async ionViewWillEnter(){
    this.connected=this.connectedService.userDetails();
    console.log("connected ou pas");
    if(this.connected != null && this.connected!=undefined){
      console.log("connecté")

      const snapshot = await firebase.firestore().collection('utilisateurs').get().then(doc=>{
        snapshot.docs.map(doc => {
          console.log("avant if")
          console.log(doc.data().uid)
          if(doc.data().uid==this.connected.uid){
            console.log(doc.data().first_name)
          }else{
            console.log("noooooon")
          }
      });
    });




      return 'true';
    }else{
      console.log('non connecté')
      return 'false';
    }

  }


}
