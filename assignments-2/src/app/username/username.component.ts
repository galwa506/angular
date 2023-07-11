import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  userName = '';

  onUpdateUserName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;

  }

  onClickResetUserName(){
    this.userName = '';
  }

}
