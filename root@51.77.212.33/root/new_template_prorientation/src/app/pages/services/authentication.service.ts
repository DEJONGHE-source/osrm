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
         first_name:value.first_name,
         id_user:res.user.uid.toString(),
         last_name:value.last_name
       })}).then(
         res=>resolve(res),
         err=>reject(err)
       )

     }
   )
  }


  /*loginUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
 }*/

  loginUser(value){
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then( () => {
        return firebase.auth().signInWithEmailAndPassword(value.email, value.password);
      }).catch(err => {
        return Promise.reject(err);
      })
  }

  logoutUser(){
    return new Promise((resolve, reject) => {
      console.log("rentre logout1");
      window.dispatchEvent(new CustomEvent('logout'));
      if(firebase.auth().currentUser){
        console.log("rentre logout;");
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
