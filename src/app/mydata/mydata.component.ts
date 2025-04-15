import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mydata',
  standalone: true,
  imports: [],
  templateUrl: './mydata.component.html',
  styleUrl: './mydata.component.css'
})
export class MydataComponent {
  title = 'Mydata-app';
  message = signal("これは、Mydataのmessageです。");
  constructor(){}
}
