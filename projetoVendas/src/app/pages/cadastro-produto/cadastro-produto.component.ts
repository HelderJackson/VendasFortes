import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/Models/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  btnAcao = "Cadastrar!"
  btnTitulo = "Cadastrar Produto"

  constructor(private produtoService: ProdutoService, private router: Router){}

  createProduto(produto: Produtos){
    this.produtoService.CreateProduto(produto).subscribe((data)=>{
      this.router.navigate(['/listagemProduto'])
    })
  }
}