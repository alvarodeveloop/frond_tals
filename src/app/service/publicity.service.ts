import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { Publicity } from '../class/admin/publicity'

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PublicityService {

  httpOptions : Object = {}
  httpOptionsUpload : Object = {}

  constructor(private http: HttpClient) { 

    var token = localStorage.getItem('token')

    this.httpOptions = {
       headers: new HttpHeaders({ 
          'Authorization': 'Bearer '+token
       })
    }
  }

  // Administrador endpoints

  get(){
    return this.http.get<Publicity[]>(`${environment.url}publicityModule`,this.httpOptions)
  }

  findById<Observable>(id: string){
    return this.http.get<Publicity>(`${environment.url}publicityModule/${id}`,this.httpOptions)
  }

  stored(data: any){
    return this.http.post<Publicity>(environment.url+"publicityModule",data,this.httpOptions)
  }

  update(data:any,id: string){
   return this.http.put(environment.url+"publicityModule/"+id,data,this.httpOptions) 
  }

  delete(id: string){
    return this.http.delete(`${environment.url}publicityModule/${id}`,this.httpOptions)
  }

  // Empresas endpoints

  getEnterprisePublicity(){
    return this.http.get<Publicity[]>(`${environment.url}enterprisePublicity`,this.httpOptions)
  }

  getEnterprisePublicityActive(id: string){
    return this.http.get<Publicity[]>(`${environment.url}PublicityActive/${id}`,this.httpOptions)
  }
}
