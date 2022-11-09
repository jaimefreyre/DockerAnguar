import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ClientesComponent } from './pages/clientes/clientes.component';
// import { ProductosComponent } from './productos/pages/productos/productos.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
// import { ProductoNuevoComponent } from './productos/pages/producto-nuevo/producto-nuevo.component';
// import { ClienteNuevoComponent } from './pages/cliente-nuevo/cliente-nuevo.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {DialogAnimationsExample, DialogAnimationsExampleDialog} from './dialog-animations-example';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
// import { EditClientDialogComponent } from './component/edit-client-dialog/edit-client-dialog.component';
import {MatNativeDateModule} from '@angular/material/core';
import { CommonModuleModule } from './common-module/common-module.module';
// import { ClientesComponent } from './clientes/pages/clientes/clientes.component';
// import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    // ClientesComponent,
    HomepageComponent,
    // ClientesComponent
    // ClienteNuevoComponent
    // EditClientDialogComponent
  ],
  imports: [
/* 
BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
*/

    CommonModuleModule,
    MatNativeDateModule,
    MatDialogModule,
    /* 
    MatNativeDateModule,
    MaterialExampleModule,
    */
    // AgGridModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModuleModule
  ],
  providers: [
    /* {
      provide: MatDialogRef,
      useValue: {}
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
