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
  token : any = localStorage.getItem('token')

  constructor(private wsvc: WebsocketService, private http: HttpClient) { 
    

    this.messages = <Subject<any>>wsvc.connect().pipe(
      map((res: any): any => {
        return res 
      })
    )

  }

  sendMsg(msg: any){
     this.messages.next(msg)
  }

  sendRate(val: any, token:any){

    this.httpOptions = {
       headers: new HttpHeaders({ 
          'Authorization': 'Bearer '+token
       })
    }
    
    return this.http.post(`${environment.url}rate`,val,this.httpOptions)
  }

  getEnterprise(token:any){

    this.httpOptions = {
       headers: new HttpHeaders({ 
          'Authorization': 'Bearer '+token
       })
    }

    return this.http.get<any>(`${environment.url}enterpriseSocket`,this.httpOptions)
  }

  getEnterpriseById(id:string,token:any){
    
    this.httpOptions = {
       headers: new HttpHeaders({ 
          'Authorization': 'Bearer '+token
       })
    }

    return this.http.get<any>(`${environment.url}enterpriseSocket/${id}`,this.httpOptions)
  }

  rateGet(token:any){

    this.httpOptions = {
       headers: new HttpHeaders({ 
          'Authorization': 'Bearer '+token
       })
    }

    return this.http.get<any>(`${environment.url}Rate`,this.httpOptions)
  }
}
