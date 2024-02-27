import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ServersComponent {    
    serverAdded: boolean = false;
    serverName: string = "";
    serverNames: string[] = [];
    showDetails: boolean = false;
    buttonClicks: string[] = [];
    userInput: string = "";

    addServer() {
      this.serverAdded = true;
      this.serverNames.push(this.serverName);
      console.log(this.serverNames);
    }

    addButtonCSSStyles() {
      return {
        'color': 'red',
        'font-weight': 'bold',
        'font-size.px': 20
      };
    }

    toggleDetails() {
      this.showDetails = !this.showDetails;
      this.logButtonClick();
    }
    
    logButtonClick() {
      const timestamp = new Date().toLocaleString();
      this.buttonClicks.push(`Button clicked at ${timestamp}`);
    }
}
