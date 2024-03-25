import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedores } from 'src/app/Models/Fornecedores';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  btnAcao = "Editar"
  btnTitulo = "Editar Fornecedor"
  fornecedor!: Fornecedores;

  constructor(private fornecedorService: FornecedorService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.fornecedorService.GetFornecedor(id).subscribe((data)=>{
      this.fornecedor = data.dados;
      console.log(this.fornecedor)
    })  
  }

  editarFornecedor(fornecedor: Fornecedores){
    this.fornecedorService.EditarFornecedor(fornecedor).subscribe((data)=>{
      this.router.navigate(['/'])
    })
  }

}
