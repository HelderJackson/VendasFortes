import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/Models/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit{
  btnAcao = "Editar"
  btnTitulo = "Editar Produto"
  produto!: Produtos;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.produtoService.GetProduto(id).subscribe((data)=>{
      this.produto = data.dados;
      console.log(this.produto)
    })  
  }

  editarProduto(produto: Produtos){
    this.produtoService.EditarProduto(produto).subscribe((data)=>{

      this.router.navigate(['/'])
    })
  }
}