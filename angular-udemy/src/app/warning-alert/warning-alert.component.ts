import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  // styleUrls: ['./warning-alert.component.css']
  styles: [`
    p{
      color: white;
      border: 1px solid black;
      width: 150px;
      background-color: red;
      text-align: center;
      padding: 2px
    }
  `]
})
export class WarningAlertComponent {

}
