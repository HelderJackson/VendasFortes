import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pedidos } from 'src/app/Models/Pedidos';
import { PedidoService } from 'src/app/services/pedido.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent {
  btnAcao = "Fechar Pedido!"
  btnTitulo = "Fazer Pedido"

  constructor(private pedidoService: PedidoService, private router: Router){}

  private apiUrl = `${environment.apiUrl}/Pedido`;
    
  createPedido(pedido: Pedidos){

    console.log(this.apiUrl);
    
    this.pedidoService.CreatePedido(pedido).subscribe(data=>{
      this.router.navigate(['/listagemPedido'])
    })
  }
}