import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fornecedores } from 'src/app/Models/Fornecedores';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css']
})
export class FornecedorFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Fornecedores>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFornecedor: Fornecedores | null = null;
 
  fornecedorForm!: FormGroup;
  fornecedores: Fornecedores[] = [];

  constructor(private fornecedorService: FornecedorService) {
  }

  ngOnInit(): void {
    this.fornecedorForm = new FormGroup({
      id: new FormControl(this.dadosFornecedor ? this.dadosFornecedor.id: 0),
      razaosocial : new FormControl(this.dadosFornecedor ? this.dadosFornecedor.razaoSocial: '',[Validators.required]),
      cnpj : new FormControl(this.dadosFornecedor ? this.dadosFornecedor.cnpj:'',[Validators.required]),
      uf : new FormControl(this.dadosFornecedor ? this.dadosFornecedor.uf:'',[Validators.required]),
      emailDeContato : new FormControl(this.dadosFornecedor ? this.dadosFornecedor.emailDeContato:'',[Validators.required]),
      nomeDoContato : new FormControl(this.dadosFornecedor ? this.dadosFornecedor.nomeDoContato:'',[Validators.required])
    });

    this.chama();
  }

  submit(){
    this.onSubmit.emit(this.fornecedorForm.value);
  }

  chama(){
    this.fornecedorService.GetFornecedores().subscribe(data => {
      //const dados = data.dados;
      this.fornecedores = data.dados;  
    })
  }
  
}
