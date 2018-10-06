import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  loading: Boolean = true
  userName: String = ''

  constructor(private _router: Router) { }

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
