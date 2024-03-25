import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedores } from 'src/app/Models/Fornecedores';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  btnAcao = "Cadastrar!"
  btnTitulo = "Cadastrar Fornecedor"
  
  constructor(private fornecedorService: FornecedorService, private router: Router){}

  createFornecedor(fornecedor: Fornecedores){
    this.fornecedorService.CreateFornecedor(fornecedor).subscribe((data)=>{
      this.router.navigate(['/'])
    })
  }
}
