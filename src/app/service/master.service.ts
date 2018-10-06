import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  httpOptions : Object = {}

  constructor(private http: HttpClient) { 
    var token = localStorage.getItem('token')

    this.httpOptions = {
       headers: new HttpHeaders({ 
          'Authorization': 'Bearer '+token
       })
    }
  }

  getStatus(id:number){
    return this.http.get(`${environment.url}AdminStatu/${id}`,this.httpOptions)
  }

  getStatusForClients(id: number){
    return this.http.get<any[]>(`${environment.url}AdminStatuClient/${id}`,this.httpOptions)
  }

  getMotivoTickets(){
    return this.http.get<any[]>(`${environment.url}AdminMotivo`,this.httpOptions)
  }
}
