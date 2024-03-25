import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produtos } from 'src/app/Models/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Produtos>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosProdutos: Produtos | null = null;
 
  produtoForm!: FormGroup;
  produto: Produtos[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {

  this.produtoForm = new FormGroup({
      id: new FormControl(this.dadosProdutos ? this.dadosProdutos.id: 0),
      nome : new FormControl(this.dadosProdutos ? this.dadosProdutos.nome: '',[Validators.required]),
      descricao : new FormControl(this.dadosProdutos ? this.dadosProdutos.descricao:'',[Validators.required]),
      valor : new FormControl(this.dadosProdutos ? this.dadosProdutos.valor:'',[Validators.required])
    });
  }

  submit(){
    this.onSubmit.emit(this.produtoForm.value);
  }
}
