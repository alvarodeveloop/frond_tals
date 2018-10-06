import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import { AdminEnterprise } from '../class/admin/admin-enterprise'
import { Observable, throwError, pipe } from 'rxjs';

import { map } from 'rxjs/operators'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AdminEnterpriseService {

  httpOptions : Object = {}

  constructor(private http: HttpClient) { 
    var token = localStorage.getItem('token')

    this.httpOptions = {
       headers: new HttpHeaders({ 
          'Authorization': 'Bearer '+token
       })
    }
  }

  private handleError() {
    return throwError(
      'Ha ocurrido un error; Por favor intentelo de nuevo.');
  };

  get(){
    return this.http.get(`${environment.url}enterpriseAdmin`,this.httpOptions)
  }

  findById<Observable>(id: string){
    return this.http.get<AdminEnterprise>(`${environment.url}enterpriseAdmin/${id}`,this.httpOptions)
  }

  stored(data: AdminEnterprise){
    return this.http.post<AdminEnterprise>(environment.url+"enterpriseAdmin",data,this.httpOptions)
  }

  update(data:AdminEnterprise){
   return this.http.put(environment.url+"enterpriseAdmin/"+data.id,data,this.httpOptions) 
  }

  delete(id: string){
   return this.http.delete(environment.url+"enterpriseAdmin/"+id,this.httpOptions)  
  }

  getPublicity(id: string){
    return this.http.get<any>(environment.url+"publicityEnterprise/"+id,this.httpOptions)
  }

  changeStatusPublicity(data: any, id: any){
    return this.http.put(`${environment.url}enterprisePublicityActive/${id}`,data,this.httpOptions)
  }
}
