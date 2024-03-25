import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Fornecedores } from 'src/app/Models/Fornecedores';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  inputData: any;
  fornecedor!: Fornecedores;

  constructor(
    private fornecedorService : FornecedorService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private ref: MatDialogRef<ExcluirComponent>
    ){}

  ngOnInit(): void {
    this.inputData = this.data;

    this.fornecedorService.GetFornecedor(this.inputData.id).subscribe((fornecedor) =>{
      this.fornecedor = fornecedor.dados;
    })
  }

  excluir(){
    this.fornecedorService.ExcluirFornecedor(this.inputData.id).subscribe((data)=>{
      this.ref.close();
      window.location.reload();
    })
  }

  cancelar(){
    this.ref.close();
  }
}
