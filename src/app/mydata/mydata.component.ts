import { Component, input, output } from '@angular/core';

function triming(value: string): string {
  return value.trim().toUpperCase();
}

@Component({
  selector: 'app-mydata',
  standalone: true,
  imports: [],
  templateUrl: './mydata.component.html',
  styleUrl: './mydata.component.css'
})
export class MydataComponent {
  message = input<string>();
  onMessageChange = output<string>();
  constructor(){}

  setMessage() {
    const newMsg = prompt("Enter message:");
    if (newMsg) {
      this.onMessageChange.emit(newMsg);
    }
  }
}
