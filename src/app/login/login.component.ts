import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router) {
    console.log("AppComponent constructor");
  }

  onSubmit(id: string, pass: string) {
    if (id === 'admin' && pass === 'kanri') {
      console.log("ログイン成功");
      this.router.navigate(['logined']);
    } else {
      console.log("ログイン失敗");
      this.router.navigate(['logined', id]);
    }
  }
}