import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
paginaAtiva="cliente";
  constructor(
    private navCtrl: NavController,
    ) { }
    private irPara(pagina){
      this.navCtrl.navigateForward(pagina);
    }
    irparaLogin(){
      this.irPara("login");
    }
    segmentChanged(ev:any){
      this.paginaAtiva=ev.detail.value;
    }
    private deveExibirPagina(pagina){
      return this.paginaAtiva === pagina;
    }
    deveExibirCadastroCliente(){
      return this.deveExibirPagina('cliente');
    }
    deveExibirCadastroMotorista(){
      return this.deveExibirPagina('motorista');
    }
    ngOnInit() {}
  
  }