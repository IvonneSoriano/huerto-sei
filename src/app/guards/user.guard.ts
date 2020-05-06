import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){

  }

  canActivate(){
    if(this.userService.onCheckUser()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
