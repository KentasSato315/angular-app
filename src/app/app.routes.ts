import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { MyitemComponent } from './myitem/myitem.component';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: HelloComponent },
    { path: 'hello', redirectTo: '/login' },
    { path: 'login', component: LoginComponent},
    {
        path: "logined",
        redirectTo: (param) => {
            if (param.url.length > 1) {
                return '/login';
            }
            return '/';
        },
    },
    { path: 'myitem/:id', component: MyitemComponent },
    { path: 'myitem', component: MyitemComponent },
    { path: '**', component: Page404Component },
    // :idをルートパラメータと言う。/myitem/123というURLにアクセスすると、id=123というパラメータが渡される。
    
];
