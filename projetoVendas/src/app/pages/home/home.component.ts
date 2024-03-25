import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Fornecedores } from 'src/app/Models/Fornecedores';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  
  fornecedores: Fornecedores[] = [];
  fornecedoresGeral: Fornecedores[] = [];

  colunas =['ID','RAZÃO SOCIAL','CNPJ','UF','E-MAIL','NOME','AÇÕES','EXCLUIR']

  constructor(private fornecedorService: FornecedorService, public dialog: MatDialog){}

  ngOnInit(): void {

    this.fornecedorService.GetFornecedores().subscribe(data =>{
      const dados = data.dados;

      dados.map((item) =>{
          //item.data = new Date(item.Data!).toLocaleDateString('pt-BR')
      })

      this.fornecedores = data.dados;
      this.fornecedoresGeral = data.dados;

    });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.fornecedores = this.fornecedoresGeral.filter(f => {
      return f.nomeDoContato.toLowerCase().includes(value);
    })
  }

  openDialog(id: number){
    this.dialog.open(ExcluirComponent, {
      width: '350px',
      height:'350px',
      data: {
        id:id
      }
    });
  }
}
