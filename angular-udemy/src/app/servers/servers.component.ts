import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus ="No server was created";
  serverName = 'testserver';

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created " + this.serverName;

  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
