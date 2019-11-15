import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {NoteService}from '../../app/note.service'
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note;
  newNoteFlag = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService, private alertCtrl: AlertController ) {
    this.note = this.navParams.get("noteParam");
    console.log("nav-param",this.note);
    if (!this.note){
      this.note={
        id:"",
        date:"",
        title:"",
        content:"",
      };
      this.newNoteFlag = true;
    }

  }
  ionViewWillLeave(){
    if (this.newNoteFlag)
      this.noteService.addNote(this.note);
  }
  onTrash(){
    //ALERTA DE CONFIRMACAO 
    let confirm = this.alertCtrl.create({
      title: "Delete?",
      message: `Tem certeza que deseja deletar essa a nota: "${this.note.title}"?`,
      buttons:[
        //primeiro botao, sem handler não faz nada
        {
          text: "Cancel"
        },
        //segundo botao CONFIRMA
        {
          text: "Confirm",
          handler: () =>{
            this.noteService.removeNote(this.note);
            this.navCtrl.pop();
          }
        } 
      ]

    });
    //exibe A confirmacao
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
