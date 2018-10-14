import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,AfterViewChecked {

  loading: Boolean = true
  userName: String = ''

  constructor(private _router: Router) { 

    window.onbeforeunload = () => {
      if(localStorage.getItem('recarga')){
        localStorage.removeItem('recarga')
      }
    }

  }

  ngOnInit() {
    var session = JSON.parse(localStorage.getItem('session'))
    this.userName = session.nombre
  }

  ngAfterViewChecked(){
    setTimeout( () => {
      this.loading = false
    },3000)
  }

  logout(){
     localStorage.removeItem('token')
     localStorage.removeItem('session')
     this._router.navigate(['/login'])
  }

}
