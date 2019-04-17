import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {
  id: any;
  color: any;
  notaSel: any;

  constructor(private route: ActivatedRoute) {
   
  }

  ngOnInit() {
    
    // id de la nota seleccionada
    const id = this.route.snapshot.paramMap.get('id');
    
    // notas guardadas de forma local
    let notasLocal = JSON.parse(localStorage.getItem('notas'));
    
    // buscamos dentro del json de notas el index a cual pertenece el id
    let index = notasLocal.findIndex(x => x.id == id);
    
    // guardamos el objeto de la nota seleccionada
    this.notaSel = notasLocal[index];
    
    console.log(this.notaSel);

  }

}
