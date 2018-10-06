import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { Tickets } from '../class/shared/tickets'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TicketsAdminService {

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
     return this.http.get<Tickets[]>(`${environment.url}ticketAdmin`,this.httpOptions)
  }

  getManageTicket<Observable>(id: string){
    return this.http.get<any>(`${environment.url}ticketResAdmin/${id}`,this.httpOptions)
  }

  truncateTickets(){
    return this.http.get(`${environment.url}ticketAdminTruncate`)
  }

  updateTicket(datos: any, id:string){
    return this.http.put(`${environment.url}ticketAdmin/${id}`,datos,this.httpOptions)
  }

  deleteTicket(id: string){
    return this.http.delete(`${environment.url}/${id}`,this.httpOptions)
  }

  saveResponseTicket(data: any){
    return this.http.post(`${environment.url}ticketResAdmin`,data,this.httpOptions)
  }

  // ============== endpoints para clientes y usuarios ===============================

  getClientTickets<Observable>(){
    return this.http.get<Tickets[]>(`${environment.url}ticketClient`,this.httpOptions)
  }

  storedTicketsClient(data){
    return this.http.post(`${environment.url}ticketClient`,data,this.httpOptions)
  }
}
