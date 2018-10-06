import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  loading: Boolean = true
  userName: String = ''
  client_particular: Boolean = true

  constructor(private _router: Router) { }

  ngOnInit() {
    var session = JSON.parse(localStorage.getItem('session'))
    this.userName = session.nombre
    this.client_particular = session.tipo_profile_id == 6 ? true : false  
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
