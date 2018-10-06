import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
  
import { Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'
import { WebsocketService } from './websocket.service'


import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  messages: Subject<any>
  httpOptions : Object = {}

  constructor(private wsvc: WebsocketService, private http: HttpClient) { 

    this.messages = <Subject<any>>wsvc.connect().pipe(
      map((res: any): any => {
        return res 
      })
    )

    var token = localStorage.getItem('token')

    this.httpOptions = {
       headers: new HttpHeaders({ 
          'Authorization': 'Bearer '+token
       })
    }

  }

  sendMsg(msg: any){
     this.messages.next(msg)
  }

  getEnterprise(){
    return this.http.get<any>(`${environment.url}enterpriseSocket`,this.httpOptions)
  }

  getEnterpriseById(id:string){
    return this.http.get<any>(`${environment.url}enterpriseSocket/${id}`,this.httpOptions)
  }
}
