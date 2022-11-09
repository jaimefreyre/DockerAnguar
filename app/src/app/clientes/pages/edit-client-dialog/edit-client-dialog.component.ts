import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientSideRowModelSteps } from 'ag-grid-community';
import { ClienteModel } from 'src/app/models/ClienteModel';
import { AllclientesService } from 'src/app/shared/services/allclientes.service';
// import { DialogData } from 'src/app/pages/clientes/clientes.component';



@Component({
  selector: 'app-edit-client-dialog',
  templateUrl: './edit-client-dialog.component.html',
  styleUrls: ['./edit-client-dialog.component.scss']
})
export class EditClientDialogComponent implements OnInit {

  @Input() cliente: ClienteModel = new ClienteModel();
  // @Input() cliente: Item = new Item();

  constructor(@Inject(MAT_DIALOG_DATA) public data:any /* DialogData */ ,
   private allClientesServices : AllclientesService,
   
   public dialogRef: MatDialogRef<EditClientDialogComponent>
  ) {}

  

  ngOnInit(): void {
    this.getCliente(this.data.id);
  }

  getCliente(id:any) {
    this.allClientesServices.GetCliente(id).subscribe((res: any) => {
      this.cliente = res;
      console.log(this.cliente);
    });
  }

  EditCliente(form:NgForm , ){
    this.cliente = form.value;
    console.log(this.cliente)
    this.allClientesServices.clienteEdit(this.cliente , this.data.id).subscribe((res:any)=>{
      console.log(res);

      if(res === 'cliente actualizado'){
        this.closeDialog();
      }

      
    });
  }

  closeDialog() {
    this.dialogRef.close('cliente actualizado');
  }

  


}
