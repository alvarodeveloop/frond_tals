import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { Profile } from '../class/admin/profile'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

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
    return this.http.get<any>(`${environment.url}profile`,this.httpOptions)
  }

  update(data: Profile){
    return this.http.put<Profile>(`${environment.url}profile/`+data.correo,data,this.httpOptions)
  }
}
