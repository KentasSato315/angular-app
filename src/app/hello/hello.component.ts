import { Component, contentChild, ContentChild, ViewChild } from '@angular/core';

// custom-valueコンポーネント
@Component({
  selector: 'custom-value',
  standalone: true,
  imports: [],
  template: `<div style="border: 1px gray solid; padding: 1px 10px;">
  <h4 style="margin: 10px 0px;">custom-value</h4>
  [value]:{{text}}</div>
  <ng-content />`
})
export class CustomValue {
  text: string = 'value:' + Math.floor(Math.random() * 1000);
}

// custom-expandコンポーネント
@Component({
  selector: 'custom-expand',
  standalone: true,
  imports: [],
  template: `
    <div style="border: 1px gray solid; padding: 1px 10px;">
      <h3 style="margin: 10px 0px;">custom-expand</h3>
      <p>[text]: {{text}}</p>
      <ng-content />
    </div>`
})
export class CustomExpand {
  @ContentChild(CustomValue) value: CustomValue | undefined;
  text = 'expand!';

  ngAfterContentInit() {
    console.log(this.value?.text);
    this.text = this.value!.text;
  }

  change(str:string) {
    this.text = str;
    this.value!.text = str;
  }
}

// helloコンポーネント
@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CustomExpand,CustomValue],
  providers: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  title = 'hello-app';
  message = 'View child sample.';
  @ViewChild(CustomExpand)
  expand: CustomExpand | undefined;

  ngAfterViewInit() {
    console.log(this.expand?.text);
  }

  doit() {
    const res = prompt("new value:");
    if (res) {
      this.message = this.expand?.text || 'undefined';
      this.expand!.change(res);
    }
  }
}