import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

// import du modele et du service senior drive API deplacements
import { Seniordriveservice } from '../../providers/seniordriveservice';
// import du module de gestion d'envoie d'email
import { EmailComposer } from '@ionic-native/email-composer';



/**
 * Generated class for the Modale1pagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
 
@IonicPage()

@Component({
  selector: 'page-modale1page',
  templateUrl: 'modale1page.html',
})

  
export class Modale1pagePage {
  deplacement: any;
  expediteur = "Vincent ARSENE";
  expediteur_email = "vincent@vincentarsene.net";

constructor(public navCtrl: NavController, public seniordriveservice:Seniordriveservice, public navParams: NavParams, public viewCtrl: ViewController, private emailComposer: EmailComposer) {

  this.deplacement={};

  this.seniordriveservice.getDeplacement(this.navParams.get ('id'))
     .then ((result) => {
      this.deplacement= result;
      console.log(result);
      // console.log(this.deplacement);
				},
				(err) => {
				console.log(err);
      }
     );
  }


  ionViewDidLoad() {
    console.log('SeniorDrive page Modale1pagePage');
  }
  
  modalhide() {
    this.viewCtrl.dismiss();
  }

  	modalemail(id) {
  
      // Ionic doc ref : https://ionicframework.com/docs/native/email-composer/
    this.emailComposer.isAvailable().then((available: boolean) =>{
    if(available) {
      //Now we know we can send
    }
   });

    let email = {
      to: this.deplacement.email,
      cc: this.expediteur_email,
      subject: 'SeniorDrive Identifiant: ' + this.deplacement.id + ' - Votre deplacement du ' + this.deplacement.depldate + ' à ' + this.deplacement.deplheuredebut,
      body: 'Bonjour, Je vous contact pour votre demande de deplacement SeniorDrive Identifiant :  '+ this.deplacement.id +
      '<br><br> Vos informations: '+
      '<br>--------------------------'+
      '<br> Nom : '+ this.deplacement.nom +
      '<br> Prenom : '+ this.deplacement.prenom +
      '<br> Téléphone : '+ this.deplacement.telephone +
      '<br> Adresse email : '+ this.deplacement.email +
      '<br><br> Resumé du deplacement :'+
      '<br>--------------------------'+
      '<br> Date: ' + this.deplacement.depldate+
      '<br> Heure de Debut: '+ this.deplacement.deplheuredebut+
      '<br> Heure de fin: '+ this.deplacement.deplheurefin+
      '<br> Lieu de depart:'+ this.deplacement.depllieudepart+
      '<br> Lieu de destination:'+ this.deplacement.depllieudestination +
      '<br><br> Je suis prêt à vous transporter'+
      '<br> Merci de me confirmer en repondant à cet email'+
      '<br><br> Cordialement'+
      '<br><br> '+this.expediteur
      ,
      isHtml: true
  };

  // Send a text message using default options
  this.emailComposer.open(email);
  }
}