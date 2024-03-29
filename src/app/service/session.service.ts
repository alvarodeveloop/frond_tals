import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SessionService implements CanActivate{

  session: any

  constructor(private _router: Router) { }

  canActivate(){
    let token = localStorage.getItem('token')
    
    if(localStorage.getItem('email_recovery')){
      localStorage.removeItem('email_recovery')
    }

    this.session = localStorage.getItem('session')

    if(!token || !this.session){
      this.cleanStorage()
      this._router.navigate(['login'])
      return false;
    }else{
      this.session = JSON.parse(this.session)
      if(this.session.profile != 1){
        this.cleanStorage()
        this._router.navigate(['login'])
        return false;
      }else{
        if(this.session.validate_email == 0){
          this._router.navigate(['login/verify_account'])
          return true;
        }
      }
      return true;
    }
  }

  cleanStorage(){
    localStorage.removeItem('session')
    localStorage.removeItem('token')
    localStorage.removeItem('email_recovery')
  }  


}
