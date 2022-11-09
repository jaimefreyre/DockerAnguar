import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllclientesService {

  constructor(private http : HttpClient) { }

  getClientes(){
    return this.http.get(environment.url+ "clientes/list" );
  }

  GetCliente(id:any){
    console.log(id);
    return this.http.get(`${environment.url}clientes/${id}` )
  }

  createClient(body:any){
    return this.http
      .post(environment.url + 'clientes/new', body ,{responseType: 'text'})
      .toPromise()
      .then((data:any) => {
        console.log(data)
      }) 
  }

  clienteEdit(body:any , id:number){

    console.log(id);

    return this.http.put(environment.url + 'clientes/' + id, body,  {responseType:'text'})
  }

  DeleteCliente(id:any){
    return this.http.delete(environment.url + 'clientes/' + id,  {responseType:'text'})

    // .subscribe(() => this.status = 'Delete successful');
  }
}
