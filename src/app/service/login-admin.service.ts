import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  constructor(private _http: HttpClient) { 
    
  }

  submit(data: Object){
    return this._http.post<any>(`${environment.url}login`,data)
  }

  recoveryPassword(data:Object){
    return this._http.post<any>(`${environment.url}recoveryPassword`,data)
  }

  verifyToken(code: string){
    return this._http.post<any>(`${environment.url}verify_token`,code)
  }

  verifyCodeRecoveryPassword(code: string){
    return this._http.post<any>(`${environment.url}verify_code_recovery_password`,code) 
  }
}
