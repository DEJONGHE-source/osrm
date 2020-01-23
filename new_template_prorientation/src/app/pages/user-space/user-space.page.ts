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

  constructor(public connectedService : AuthenticateService) { }

  ngOnInit() {


  }

  async ionViewWillEnter(){
    this.connected=this.connectedService.userDetails();
    console.log("connected ou pas");
    if(this.connected != null && this.connected!=undefined){
      console.log("connecté")

      const snapshot = await firebase.firestore().collection('utilisateurs').get()
      snapshot.docs.map(doc => {
        if(doc.data().id_user==this.connected.uid){
          this.first_name=doc.data().first_name
          this.last_name=doc.data().last_name
        }else{
        }
      });




      return 'true';
    }else{
      console.log('non connecté')
      return 'false';
    }

  }


}
