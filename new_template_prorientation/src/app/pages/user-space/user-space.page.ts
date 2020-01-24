import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import * as firebase from 'firebase/app';
import { Chart } from 'chart.js';


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
  chart

  constructor(public connectedService : AuthenticateService,private elementRef: ElementRef) { }

  ngOnInit() {


  }

  isConnected(){
      var connected = this.connectedService.userDetails();
      if(connected != null && connected!=undefined){
        return true;
      }else{
        return false;
      }
  }

  ionViewWillEnter(){
      this.seances = new Array()
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
    var date = Array();
    var check = false;

    for( var i = 0 ; i < this.seances.length;i++) {

      var date_str = this.seances[i][3];
      const words = date_str.split('-');

      for (var j = 0; j<words.length; j++) {
        date[j] = parseInt(words[j]);
      }

      check = this.checkDateWeek(date,current_date);

      if ( check == true ) {
        this.weekData.push(this.seances[i]);

      }


    }
    var x_axis = this.getXAxis();
    console.log("x axis :",x_axis);

    var y_axis = this.getYaxis(x_axis);
    this.createChart(x_axis,y_axis);


  }

  checkDateWeek (date,current_date) {

    if ( (Math.abs(date[0] - current_date.getFullYear())) > 1) {
      console.log("test = 1) year :",Math.abs(date[0] - current_date.getFullYear()));
      return false;
    } else if ((Math.abs(date[1] - current_date.getMonth())) > 1) {
      console.log("test = 2) month :",Math.abs(date[1] - current_date.getMonth()));
      return false;
    } else if ( (Math.abs(date[2] - current_date.getDate())) > 7 ) {
      console.log("test = 3) day :",Math.abs(date[2] - current_date.getDate()));
      return false;
    } else {
      return true;
    }

  }

  getXAxis(){

    var current_date = new Date();

    var tampon_date = new Date();
    var axis_date = new Array();

    for (var i =0; i<7;i++ ) {

      tampon_date.setDate(current_date.getDate() - i);

      var tampon_date_str = tampon_date.getFullYear()+'-'+tampon_date.getMonth() +'-'+tampon_date.getDate();
      //tampon_date_str = tampon_date_str.split('-');


      var tampon_date_int = new Array();

      for (var j = 0; j<tampon_date_str.length; j++) {
        tampon_date_int[j] = parseInt(tampon_date_str[j]);
      }

      axis_date.push(tampon_date_str);

    }

    var x_axis: string[] = axis_date.map(item => item);

    return x_axis.reverse();
  }

  getYaxis(x_axis) {
    var y_axis = new Array();

    for ( var i = 0; i<x_axis.length; i++) {
      y_axis.push(0);
    }

    for( var i = 0; i<this.weekData.length; i++ ) {
      for( var j = 0; j<x_axis.length; j++ ) {
        if( this.weekData[i][3] == x_axis[j]) {
          console.log("hello");
          y_axis[j] = y_axis[j] + this.weekData[i][0];
          console.log("week data :",this.weekData[i][3], " x_axis :",x_axis[j]);
        }
      }
    }
    console.log("y axis :",y_axis);
    return y_axis;
  }

  createChart(x_axis,y_axis) {

    var ctx = document.getElementById('myChart').getContext('2d');
    // var ctx = $('#myChart');
    // var ctx = 'myChart';

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: { labels: x_axis,
       datasets: [
         {
           data: y_axis
         }
       ]},
      options: {/* Options here */}
    });
  }

  getConnected = ()=>{
    return new Promise((resolve,reject) => {
      this.connected=this.connectedService.userDetails();
      resolve( "cest bon")
    });
  }

}
