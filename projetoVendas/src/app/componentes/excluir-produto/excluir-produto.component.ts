import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/Models/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css']
})
export class ExcluirProdutoComponent implements OnInit{
  inputData: any;
  produto!: Produtos;

  constructor(
    private produtoService : ProdutoService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private ref: MatDialogRef<ExcluirProdutoComponent>
    ){}

    ngOnInit(): void {
      this.inputData = this.data;

      this.produtoService.GetProduto(this.inputData.id).subscribe((produto) =>{
        this.produto = produto.dados;
    })
    }

    excluir(){
      this.produtoService.ExcluirProduto(this.inputData.id).subscribe((data)=>{
        this.ref.close();
        window.location.reload();
      })
    }
  
    cancelar(){
      this.ref.close();
    }
}