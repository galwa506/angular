import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    // selector: '[app-server]', //attribute selector
    // selector: '.app-server', //for reference to select by class use .
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
            
        }
    `]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus = 'offline';
    constructor(){
        this.serverStatus = Math.random() > 0.5? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green': 'red';
    }
}