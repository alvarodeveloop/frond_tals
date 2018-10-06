import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { Clients } from '../class/enterprise/clients'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  httpOptions : Object = {}

  constructor(private http: HttpClient) { 

    var token = localStorage.getItem('token')

    this.httpOptions = {
       headers: new HttpHeaders({ 
          'Authorization': 'Bearer '+token
       })
    }
  }

  get(){
    return this.http.get<Clients[]>(`${environment.url}enterpriseClient`,this.httpOptions)
  }

  findById(id:string){
    return this.http.get<Clients>(`${environment.url}enterpriseClient/`+id,this.httpOptions)
  }

  stored(data: Clients){
   return this.http.post<Clients>(`${environment.url}enterpriseClient`,data,this.httpOptions) 
  }

  update(data: Clients){
    return this.http.put<Clients>(`${environment.url}enterpriseClient/`+data.id,data,this.httpOptions)
  }

  delete(id: string){
    return this.http.delete<Clients>(`${environment.url}enterpriseClient/`+id,this.httpOptions)
  }

  storedOwned(data: Clients){
    return this.http.post(`${environment.url}clientEnterprise`,data)
  }

}
