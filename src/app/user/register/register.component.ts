import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserInterface } from '../../models/userInterface';
import { UserService } from '../../services/user.service';
import { confirmPassword } from 'src/app/shared/confirmPassword.validator';
import { Element } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  protected formRegister: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }
  private usuario;

  
  ngOnInit() {
    this.buildForm();
  }
  private buildForm(){
    this.formRegister = this.formBuilder.group({
      'user': [ '' ,[
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern(/^[a-zA-Z\s]*$/)
      ]],
      'password': ['' ,[
        Validators.required,
        Validators.minLength(8)
      ]],
      'cpassword': ['' ,
        Validators.required],
    },
    {
      validators: confirmPassword
    }
    );
  }
  get user() { return this.formRegister.get('user'); }
  get password() { return this.formRegister.get('password'); }
  get cpassword() { return this.formRegister.get('cpassword'); }

  register(){
    if(this.formRegister.valid){
     this.usuario = this.user.value;
      this.userService.registerUser(this.user.value, this.password.value)
      .subscribe( user =>{
        console.log(user);
        this.userService.login(this.user.value, this.password.value)
        .subscribe(data =>{
          this.userService.setUser(this.usuario);
          this.userService.setToken(data.token);
          console.log(data);
          this.router.navigate(['/dashboard']);
          
        },
        error => {
          console.log("error.../" + error);
        })
      },
      error => {
        console.log("error.../" + error);
      })
    }
    else{
      console.log("No valido");
    }
    
  }

  checarSiSonIguales(): boolean {
    return this.formRegister.hasError('notEqual') &&
      this.password.touched &&
      this.cpassword.touched;
  }
  


  
}
