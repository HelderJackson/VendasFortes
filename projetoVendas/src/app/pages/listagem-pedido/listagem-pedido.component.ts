import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PedidoAux } from 'src/app/Models/PedidoAux';
import { Pedidos } from 'src/app/Models/Pedidos';
import { PedidoAuxService } from 'src/app/services/pedido-aux.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-listagem-pedido',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.css']
})
export class ListagemPedidoComponent implements OnInit{
  pedidos: PedidoAux[] = [];
  pedidosGeral: PedidoAux[] = [];

  colunas =['ID','FORNECEDOR','PRODUTO','DATA','QUANTIDADE','VALOR TOTAL']

  constructor(private pedidoAuxService: PedidoAuxService, public dialog: MatDialog){}

  ngOnInit(): void {

    this.pedidoAuxService.GetPedidos().subscribe(data =>{
      const dados = data.dados;
      console.log(dados);
      dados.map((item) =>{
          item.dataDoPedido = new Date(item.dataDoPedido!).toLocaleDateString('pt-BR')
      })

      this.pedidos = data.dados;
      this.pedidosGeral = data.dados;
      console.log(this.pedidos);
    });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.pedidos = this.pedidosGeral.filter(p => {
      return p.nomeFornecedor.toLowerCase().includes(value);
    })
  }
}
