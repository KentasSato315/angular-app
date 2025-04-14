import { Component, signal, effect, Signal, computed } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  title: string = 'hello-app';
  message: string = 'Signal sample';
  count = signal(0);
  total = computed(() => {
    let total = 0;
    for (let i = 0; i <= this.count(); i++) {
      total += i;
    }
    return total;
  });

  constructor() {
    // エフェクトの定義：メッセージリストの変化を監視
    effect(() => {
      console.log('count:', this.count());
    });
    effect(() => {
      console.log('total:', this.total());
      this.message = 'total:' + this.total();
    });
  }
  
  calc(n:number) {
    this.count.set(n);
  }
}