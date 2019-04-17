import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  notas: {};
  fecha: any;
  constructor(public _generalService: GeneralService, private _router: Router, private navCtrl: NavController) {
    this.getNotas();

    this.fecha = new Date();
    console.log(this.fecha);
  }

  /**
  * METODO QUE OBTIENE LAS NOTAS DEL API
  * @author Adrian Maturano
  * @returns JSON
  */
  getNotas() {
    this._generalService.getData()
    .then(data => {
      this.notas = data;
      // guardamos el json con las notas de forma local
      localStorage.setItem('notas', JSON.stringify(this.notas));
      console.log(data);
    });
  }


  /**
  * METODO QUE ENVIA EL ID DE LA NOTA SELECCIONADA A LA PANTALLA DE CONTENIDO
  * @author Adrian Maturano
  * @returns void
  */
  contenido(notaContenido: any) {
    this.navCtrl.navigateForward(`/contenido/${notaContenido}`);
  }


  redSocial(red: string) {

    if ( red == 'f') {
      window.open('https://www.facebook.com/ElUniversalOnline', '_system', 'location=yes');
    } else {
      window.open('https://twitter.com/El_Universal_Mx', '_system', 'location=yes');
    }

  }

}
