import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
 
  constructor(
    private navCtrl: NavController,
  ) { }
  private irPara(pagina){
    this.navCtrl.navigateForward(pagina);
  }
  irparaCadastro(){
    this.irPara("cadastro");
  }
  irparaLogin(){
    this.irPara("login");
  }
  irparaMapa(){
    this.irPara("mapa");
  }
  irparaInformações(){
    this.irPara("informações");
  }
     
}
