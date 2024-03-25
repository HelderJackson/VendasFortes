import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produtos } from 'src/app/Models/Produtos';
import { ExcluirProdutoComponent } from 'src/app/componentes/excluir-produto/excluir-produto.component';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent implements OnInit {

produtos: Produtos[] = [] ;

colunas =['ID','NOME','DESCRIÇÃO','DATA','VALOR', 'AÇÕES' , 'EXCLUIR']

constructor(private produtoService: ProdutoService, public dialog: MatDialog){}

ngOnInit(): void {

    this.produtoService.GetProdutos().subscribe(data =>{
      const dados = data.dados;

      dados.map((item) =>{
          item.dataDoCadastro = new Date(item.dataDoCadastro!).toLocaleDateString('pt-BR')
      })

      this.produtos = data.dados;
    });
  }

  openDialog(id: number){
    this.dialog.open(ExcluirProdutoComponent, {
      width: '800px',
      height:'250px',
      data: {
        id:id
      }
    });
  }
}