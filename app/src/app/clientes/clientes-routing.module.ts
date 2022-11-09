import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteNuevoComponent } from './pages/cliente-nuevo/cliente-nuevo.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes : Routes = [
  {
    path:'',
    children:[
      {
        path:'list' , component:ClientesComponent
      },
      {
        path:'new' , component:ClienteNuevoComponent
      },
      {
        path:'**', redirectTo:'list'
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientesRoutingModule { }
