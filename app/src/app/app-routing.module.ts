import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'' , pathMatch:'full' , redirectTo:'clientes'
  },

  {
    path:'clientes' ,
    loadChildren: ()=>import('./clientes/clientes.module').then( m => m.ClientesModule )
  },

  {
    path:'productos',
    loadChildren: ()=>import('./productos/productos.module').then( m => m.ProductosModule )
  }


 /*  {
    path:'productos' , component: ProductosComponent
  },
  {
    path:'producto/nuevo' , component : ProductoNuevoComponent
  },
  {
    path:'cliente/nuevo' , component : ClienteNuevoComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
