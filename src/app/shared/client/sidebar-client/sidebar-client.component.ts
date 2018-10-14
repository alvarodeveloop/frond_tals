import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.css']
})
export class SidebarClientComponent implements OnInit {

  parrafo : boolean = localStorage.getItem('recarga') ? true : false

  constructor() { }

  ngOnInit() {
  }

}
