import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NoteService} from '../../app/note.service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
notes;
constructor(public navCtrl: NavController, private noteService: NoteService) {
  this.notes= noteService.notes;
  }
  onItemClick (note){
  //consolse.log("item-clik", note)
  this.navCtrl.push('DetailPage', {
  noteParam: note
  });
  }
} 
