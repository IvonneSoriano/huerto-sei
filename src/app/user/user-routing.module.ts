import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component: UserComponent,
    children: [
      {path:'', component: LoginComponent},
      {path:'login', component: LoginComponent},
      {path:'register', component: RegisterComponent}
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
