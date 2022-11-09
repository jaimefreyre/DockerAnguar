import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteNuevoComponent } from './pages/cliente-nuevo/cliente-nuevo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes-routing.module';
import { EditClientDialogComponent } from './pages/edit-client-dialog/edit-client-dialog.component';



@NgModule({
  declarations: [
    ClientesComponent,
    ClienteNuevoComponent,
    EditClientDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
