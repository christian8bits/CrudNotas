import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


notes = [
  {
    id:'1',
    date: '2016-02-01',
    title: 'Firebase',
    content: 'Que tal programar Serveless?'
  },
  {
    id: '2',
    date: '2016-01-01',
    title: 'Ionic',
    content: 'Aprenda o básico de ionic'
  },
  {
    id: '3',
    date: '2016-03-01',
    title: 'Angular',
    content: 'Importante para desenvolver com Ionic'
  }
  ]
  onItemClick (note){
  //consolse.log("item-clik", note)
  this.navCtrl.push('DetailPage', {
  noteParam: note
  });
  }
} 
