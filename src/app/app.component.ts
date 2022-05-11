import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'todolistApp';
  numbers:string[]=[];
  senditem(item: any,item2: any)
  {
    this.numbers.push(item+" "+item2);
  }
  deletecontact(index: any)
  {
    this.numbers.splice(index,1);
  }
}
