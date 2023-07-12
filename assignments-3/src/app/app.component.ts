import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignments-3';

  detailsDisplayed = false;
  log: Date[] = [];
  
  onToggleDetails(){
    this.detailsDisplayed = !this.detailsDisplayed;
    // this.log.push(this.log.length + 1)
    this.log.push(new Date())
  }


}
