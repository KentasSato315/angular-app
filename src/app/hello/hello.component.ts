import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MyCheckService, DataType } from '../mycheck.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit, OnDestroy{
  title: string = 'my-app';
  message: string = 'Hello World!. ';
  private data$: Observable<DataType> | undefined;
  private subscription: Subscription;

  constructor(private myCheckService: MyCheckService) {
    this.data$ = myCheckService.post$;
    this.subscription = myCheckService.post$.subscribe((data: DataType) => {
      console.log(data);
      this.message = JSON.stringify(data, null ,2);
    });
  }
  
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onGet(id: number): void {
    this.message = 'Loading...';
    this.myCheckService.getData(id);
  }
}