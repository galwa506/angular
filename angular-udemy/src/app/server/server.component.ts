import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    // selector: '[app-server]', //attribute selector
    // selector: '.app-server', //for reference to select by class use .
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}