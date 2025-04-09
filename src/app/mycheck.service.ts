import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

export interface DataType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const url = 'https://jsonplaceholder.typicode.com/posts/';

@Injectable({
  providedIn: 'root'
})
export class MyCheckService {
  // 現在の値を保持して新しい購読者に最新の値を提供するSubject
  private post: BehaviorSubject<DataType> = 
    new BehaviorSubject<DataType>({ id: 0, userId: 0, title: '', body: '' });
  
  // postの値が更新されたらpost$も更新され購読の処理を行えるようにする
  post$: Observable<DataType> = this.post.asObservable();
  
  // 購読の処理を行うSubscription
  subscription: Subscription | undefined;

  // HttpClientを注入(DI)する
  constructor(private http: HttpClient) {}

  getData(id: number): void {
    const res = this.http.get<DataType>(url + id);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = res.subscribe((data: DataType) => {
      this.post.next(data);
    });
  }
}
