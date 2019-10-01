import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recebimento',
  templateUrl: './recebimento.page.html',
  styleUrls: ['./recebimento.page.scss'],
})
export class RecebimentoPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    ) { }
    private irPara(pagina){
      this.navCtrl.navigateForward(pagina);
    }
    irparaHome(){
      this.irPara("home");
    }
    ngOnInit() {}
  
  }