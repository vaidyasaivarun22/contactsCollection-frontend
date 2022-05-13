import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'todolistApp';
  numbers:string[]=[];
  count:number=0;
  senditem(item: any,item2: any)
  {
    if(item != "" && item2 != "")
    {
      this.numbers.push(item+" - "+item2);
      this.count++;
    }
  }
  deletecontact(index: any)
  {
    this.numbers.splice(index,1);
    this.count--;
  }
}
