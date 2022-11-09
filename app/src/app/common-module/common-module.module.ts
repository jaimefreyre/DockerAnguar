import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ClientesComponent } from '../pages/clientes/clientes.component';
/* import { EditClientDialogComponent } from '../clientes/pages/edit-client-dialog/edit-client-dialog.component';
import { ClienteNuevoComponent } from '../clientes/pages/cliente-nuevo/cliente-nuevo.component'; */



@NgModule({
  declarations: [
    // ClientesComponent,
   /*  EditClientDialogComponent,
    ClienteNuevoComponent */
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CommonModuleModule { }
