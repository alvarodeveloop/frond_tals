import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-enterprise',
  templateUrl: './sidebar-enterprise.component.html',
  styleUrls: ['./sidebar-enterprise.component.css']
})
export class SidebarEnterpriseComponent implements OnInit {

  parrafo : boolean = localStorage.getItem('recarga') ? true : false
  
  constructor() { }

  ngOnInit() {
  }

}
