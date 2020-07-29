import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:'',
    component:HeaderComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
