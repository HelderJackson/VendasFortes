import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FornecedorFormComponent } from './componentes/fornecedor-form/fornecedor-form.component';
import { EditarComponent } from './pages/editar/editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Material*/
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {ExcluirComponent } from './componentes/excluir/excluir.component';
import {MatSelectModule} from '@angular/material/select';
import { CadastroPedidoComponent } from './pages/cadastro-pedido/cadastro-pedido.component';
import { PedidoFormComponent } from './componentes/pedido-form/pedido-form.component';
import { ListagemPedidoComponent } from './pages/listagem-pedido/listagem-pedido.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import { ProdutoFormComponent } from './componentes/produto-form/produto-form.component';
import { ListagemProdutoComponent } from './pages/listagem-produto/listagem-produto.component';
import { EditarProdutoComponent } from './pages/editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './componentes/excluir-produto/excluir-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    FornecedorFormComponent,
    EditarComponent,
    ExcluirComponent,
    CadastroPedidoComponent,
    PedidoFormComponent,
    ListagemPedidoComponent,
    CadastroProdutoComponent,
    ProdutoFormComponent,
    ListagemProdutoComponent,
    EditarProdutoComponent,
    ExcluirProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
