import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private ppvCtrl: PopoverController,
  ) {}
private irPara(pagina){
  this.navCtrl.navigateForward(pagina);
}
irparaRecebimento(){
  this.irPara("recebimento");
}

irparaLogin(){
  this.irPara("login");
}

async exibirMenu(ev: any){
  const popover = await this.ppvCtrl.create({
    component: MenuComponent,
    event: ev,
    backdropDismiss:true

  });
  return await popover.present();
}
}
