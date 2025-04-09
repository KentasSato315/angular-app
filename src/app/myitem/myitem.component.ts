import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myitem',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './myitem.component.html',
  styleUrl: './myitem.component.css'
})

export class MyitemComponent implements OnInit {
  message1: string = '';
  message2: string = '';
  
  constructor(private router: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.message1 = 'params:' +
      JSON.stringify(this.router.snapshot.params);
    this.message2 = 'query:' +
      JSON.stringify(this.router.snapshot.queryParams);
  }
}
