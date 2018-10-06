import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

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
    return this.http.get(`${environment.url}Animations`,this.httpOptions)
  }

  findById(id: string){
    return this.http.get<any>(`${environment.url}Animations/${id}`,this.httpOptions)
  }

  stored(data: any){
    return this.http.post(`${environment.url}Animations`,data,this.httpOptions)
  }

  update(data: any, id: string){
    return this.http.post(`${environment.url}Animations/${id}`,data,this.httpOptions)
  }

  delete(id: string){
    return this.http.delete(`${environment.url}Animations/${id}`,this.httpOptions)
  }  

  upload_img(data: any){
    return this.http.post(`${environment.url}AnimationsImagen`,data,this.httpOptions)
  }

  editFileUpload(data: any, route: string){
    return this.http.put<any>(`${environment.url}${route}`,data,this.httpOptions)
  }

  deleteImageErase(id: string){
    return this.http.delete<any>(`${environment.url}AnimationsOne/${id}`,this.httpOptions)
  }

  deleteImageEraseAll(id:string){
    return this.http.delete<any>(`${environment.url}AnimationsAll/${id}`,this.httpOptions)
  }

  getImagesInteraction<Observable>(){
     return this.http.get<any>(`${environment.url}AnimationsViews`,this.httpOptions)
  }
}
