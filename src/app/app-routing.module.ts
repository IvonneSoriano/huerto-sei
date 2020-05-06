import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
 
  {path:'', 
  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
},
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [UserGuard]
  }, 
   {path: '404', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
