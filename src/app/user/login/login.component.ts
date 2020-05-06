import { UserInterface } from './../../models/userInterface';
import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected formLogin: FormGroup;
  protected isWrong: boolean = false;
  protected errorMessage = "";
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }
  private usuario;
  
  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this, this.formLogin = this.formBuilder.group({
      'user': ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^[a-zA-Z\s]*$/)
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    })
  }

  get user() { return this.formLogin.get('user'); }
  get password() { return this.formLogin.get('password'); }

  login() {
    if (this.formLogin.valid) {
      this.userService.login(this.user.value, this.password.value)
        .subscribe(resp => {
          
          if(resp.valid){
            this.isWrong = false;
            this.usuario = this.user.value;
          this.userService.setUser(this.usuario);
          this.userService.setToken(resp.token);
          this.router.navigate(['/dashboard']);
          }
          else{
            console.log(resp.result)
            this.erroresReset(resp.result);
          }
          
        },
          error => {
            console.log("error.../" + error);
            // this.erroresReset();
          })
    }
  }

  erroresReset(par : string) {
    this.isWrong = true;
    if(par === 'Password'){
this.errorMessage = "The password is wrong."
    }
    else if(par === "User"){
      this.errorMessage = "The user is wrong."
    }
    else{
      this.errorMessage = "The user or password is wrong.";
    }
    this.formLogin.reset();


    setTimeout(() => {
      this.isWrong = false;
    }, 4000);

  }

}
