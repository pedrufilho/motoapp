import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }
  private irPara(pagina){
    this.navCtrl.navigateForward(pagina);
  }
  irparaLogin(){
    this.irPara("login");
  }

  ngOnInit() {
  }

}
