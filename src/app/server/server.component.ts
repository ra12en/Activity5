import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverStatus: string="";
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }
  getColor() {
    return this.serverStatus==="online" ? "green" : "red";
  }
  ngOnInit() {

  }
}