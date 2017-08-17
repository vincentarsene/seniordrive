import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

// import du modele et du service senior drive API deplacements
import { Seniordriveservice } from '../../providers/seniordriveservice';
// page de details des deplacements
import { Modale1pagePage } from '../../pages/modale1page/modale1page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Seniordriveservice]
})

export class HomePage {
  // deplacements : Array<{id:number,version:number}>;
  deplacements : any;

  constructor(public navCtrl: NavController, private seniordriveservice: Seniordriveservice, public modalCtrl: ModalController) { 

  this.seniordriveservice.getDeplacements ()
     .then ((result) => {
      // this.deplacements = deplacements.deplacements;
      this.deplacements= result;
      // console.log(result);
      console.log(this.deplacements);
				},
				(err) => {
				console.log(err);
      }
     );
  }



  modalshow(id) {
    let planModal = this.modalCtrl.create(Modale1pagePage, {id:id});
    planModal.present();
   }
}

