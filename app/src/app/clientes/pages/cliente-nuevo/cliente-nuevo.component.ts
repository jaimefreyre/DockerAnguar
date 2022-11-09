import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AllclientesService } from 'src/app/shared/services/allclientes.service';

@Component({
  selector: 'app-cliente-nuevo',
  templateUrl: './cliente-nuevo.component.html',
  styleUrls: ['./cliente-nuevo.component.scss']
})
export class ClienteNuevoComponent implements OnInit {

  constructor(
    private allClientesServices : AllclientesService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  CreateUser(form : NgForm){
    console.log(form);
    let cliente_nuevo = form.value;
    return this.allClientesServices.createClient(cliente_nuevo),this.router.navigate(['clientes/list']);
  }

}
