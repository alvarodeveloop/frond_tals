import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { Subscription } from '../class/shared/subscription'

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  httpOptions : Object = {}

  constructor(private http: HttpClient) { 
    var token = localStorage.getItem('token')

    this.httpOptions = {
       headers: new HttpHeaders({ 
          'Authorization': 'Bearer '+token
       })
    }
  }

  get<Observable>(){
    return this.http.get<Subscription[]>(`${environment.url}SubscriptionEnterprise`,this.httpOptions)
  }

  findById(id:string){
    return this.http.get<Subscription>(`${environment.url}SubscriptionEnterprise/${id}`,this.httpOptions)
  }

  post(data: Subscription){
    return this.http.post(`${environment.url}SubscriptionEnterprise`,data,this.httpOptions)
  }

  update(data: Subscription, id: string){
    return this.http.put(`${environment.url}SubscriptionEnterprise/${id}`,data,this.httpOptions)
  }

  delete(id: string){
    return this.http.delete(`${environment.url}SubscriptionEnterprise/${id}`,this.httpOptions)
  }

  getSubscriptionActive<Observable>(){
    return this.http.get(`${environment.url}Subscription`,this.httpOptions)
  }
}
