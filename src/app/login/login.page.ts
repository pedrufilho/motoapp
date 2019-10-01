import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private ppvCtrl: PopoverController,
    ) { }
    private irPara(pagina){
      this.navCtrl.navigateForward(pagina);
    }
    irparaHome(){
      this.irPara("home");
    }
    irparaCadastro(){
      this.irPara("cadastro");
    }

    ngOnInit() {}

    async exibirMenu(ev: any){
      const popover = await this.ppvCtrl.create({
        component: MenuComponent,
        event: ev,
        backdropDismiss:true
    
      });
      return await popover.present();
    }
    
  
  }