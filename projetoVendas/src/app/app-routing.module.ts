import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { CadastroPedidoComponent } from './pages/cadastro-pedido/cadastro-pedido.component';
import { ListagemPedidoComponent } from './pages/listagem-pedido/listagem-pedido.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import { ListagemProdutoComponent } from './pages/listagem-produto/listagem-produto.component';
import { EditarProdutoComponent } from './pages/editar-produto/editar-produto.component';

const routes: Routes = [
  {path: 'cadastro' , component: CadastroComponent},
  {path: '', component: HomeComponent},
  {path: 'editar/:id',component:EditarComponent},
  {path: 'cadastroPedido', component:CadastroPedidoComponent},
  {path: 'listagemPedido', component:ListagemPedidoComponent},
  {path: 'cadastroProduto', component:CadastroProdutoComponent},
  {path: 'listagemProduto', component:ListagemProdutoComponent},
  {path: 'editarProduto/:id',component:EditarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
