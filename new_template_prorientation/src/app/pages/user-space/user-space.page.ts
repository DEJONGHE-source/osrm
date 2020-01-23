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
  seances = new Array()
  weekData = new Array()

  constructor(public connectedService : AuthenticateService) { }

  ngOnInit() {


  }

  ionViewWillEnter(){
      this.getConnected().then(async ()=>{
      console.log("connected ou pas");
      if(this.connected != null && this.connected!=undefined){
        console.log("connecté")
        const snapshot = await firebase.firestore().collection('/seances').where("id_user","==",this.connected.uid).get()
        snapshot.docs.map(doc => {
          if(doc.data().id_user==this.connected.uid){
            var local = new Array();
            local.push(doc.data().distance);
            local.push(doc.data().time);
            local.push(doc.data().type);
            local.push(doc.data().date);
            this.seances.push(local);
          }
        });

        this.getWeekData();

        const snapshot1 = await firebase.firestore().collection('/utilisateurs').where("id_user","==",this.connected.uid).get()
        snapshot1.docs.map(doc => {
          this.first_name=doc.data().first_name;
          this.last_name=doc.data().last_name;
        });
        console.log(this.seances)
        return 'true';

      }else{
        console.log('non connecté')
        return 'false';
      }
    });


  }

  getWeekData = () => {
    var current_date = new Date();

    for( var i = 0 ; i < this.seances.length;i++) {
      var date = this.seances[i][3];

      if( current_date.getFullYear() != date.getFullYear() || current_date.getMonth() != date.getMonth() ) {
        console.log("seance not in current week")
      } else {
        this.weekData.push(this.seance[i][0]);
        console.log(" week data ",this.weekData);

      }
    }

  }

  getConnected = ()=>{
    return new Promise((resolve,reject) => {
      this.connected=this.connectedService.userDetails();
      resolve( "cest bon")
    });
  }


}
