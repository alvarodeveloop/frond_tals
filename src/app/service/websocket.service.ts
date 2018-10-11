import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable, Subject } from 'rxjs'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket;

  constructor() { }

  connect(): Subject<MessageEvent>{
    this.socket = io.connect(environment.ws_url)

    let observable = new Observable(observer => {

      this.socket.on('message',  data => {
        observer.next(data)
      })

      this.socket.on('clientEnterprise',  data => {
        observer.next({type: "clientEnterprise", data})
      })

      this.socket.on('enterpriseClient',  data => {
        observer.next({type: "enterpriseClient", data})
      })

      this.socket.on('historial',  data => {
        observer.next({type: "historial", data: data})
      })

      this.socket.on('exit',  data => {
        observer.next({type: "exit"})
      })

      this.socket.on('saludo', data => {
        observer.next({type: "saludo"})
      })

      return () => {
        this.socket.disconnect()
      }
    })

    let observer = {
       next: (data: any) => {
         console.log('aqui emitiendo',data)
         if(data.message === "disconnect"){
           this.socket.disconnect()
         }else{
           this.socket.emit(data.message,JSON.parse(JSON.stringify(data)))
         }
       }
    }

    return Subject.create(observer,observable)
  }
}
