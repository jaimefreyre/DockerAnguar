import { Component, OnInit, ViewChild } from '@angular/core';
// import {MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
/* import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community'; */
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { EditClientDialogComponent } from 'src/app/clientes/pages/edit-client-dialog/edit-client-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AllclientesService } from 'src/app/shared/services/allclientes.service';
import { Router } from '@angular/router';

/* export interface DialogData {
  id:0;
} */

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {



  clientes : any;
  id_cliente ? : any;
  
  constructor(
    private http:HttpClient,
    public dialog: MatDialog,
    private allClientesServices : AllclientesService,
    private router : Router
  ) { }

  

  
  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.allClientesServices.getClientes().subscribe((res: any) => {
       this.clientes = res;
       console.log(this.clientes);  
    });
  }

  GoToEditClient(id:any){
    console.log(id);
    console.log('vamos a la modal para editar clientes');
    this.openDialog(id)
  }

  GoToDeleteClient(id:any){
    
    this.allClientesServices.DeleteCliente(id).subscribe((res:any)=>{
      console.log(res);
      this.getClientes();
    })
    
  }

  openDialog(id:any) {
    this.dialog.open(EditClientDialogComponent, {
      data: {
        id: id,
      },
    }).afterClosed()
    .subscribe((res) => {
      console.log(res);
      this.getClientes();
    });
  }


  IrANuevoCliente(){
     this.router.navigate(['cliente/nuevo'])
  }
  
}
