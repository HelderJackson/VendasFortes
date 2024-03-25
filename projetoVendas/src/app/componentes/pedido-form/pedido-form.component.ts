import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Fornecedores } from 'src/app/Models/Fornecedores';
import { Pedidos } from 'src/app/Models/Pedidos';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})

export class PedidoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Pedidos>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosPedidos: Pedidos | null = null;
 
  pedidoForm!: FormGroup;
  pedidos: Pedidos[] = [];
  
  fornecedores: Fornecedores[] = [];
  
  
  constructor(private fornecedorService: FornecedorService) {
  }

  ngOnInit(): void {
  
    this.pedidoForm = new FormGroup({
      id: new FormControl(this.dadosPedidos ? this.dadosPedidos.id: 0),
      nomeFornecedor :  new FormControl(this.dadosPedidos? this.dadosPedidos.nomeFornecedor: "",[Validators.nullValidator]),
      nomeProduto : new FormControl(this.dadosPedidos ? this.dadosPedidos.nomeProduto:'',[Validators.nullValidator]),
      quantidade : new FormControl(this.dadosPedidos ? this.dadosPedidos.quantidade:'',[Validators.nullValidator]),
    });

    this.chama();
  }

  submit(){
   this.onSubmit.emit(this.pedidoForm.value);
  }

  chama(){
    this.fornecedorService.GetFornecedores().subscribe(data => {
      //const dados = data.dados;
      this.fornecedores = data.dados;  
    })
  }
}