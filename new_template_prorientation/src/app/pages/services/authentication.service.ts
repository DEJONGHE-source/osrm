import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable()
export class AuthenticateService {

  constructor(
    public afs: AngularFirestore
  ){}
  registerUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then((res)=>{

       this.afs.collection('/utilisateurs').add({
         birthdate:"23/07/1997",
         first_name:'lucas',
         id_user:res.user.uid.toString(),
         last_name:"laaaaal"

       })}).then(
         res=>resolve(res),
         err=>reject(err)
       )

     }
   )
  }


  loginUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }

  userDetails(){
    return firebase.auth().currentUser;
  }
}
