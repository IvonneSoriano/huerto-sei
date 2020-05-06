import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
var alertify = require('alertifyjs');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usuario = this.userService.geCurrenttUser();
    console.log( this.userService.geCurrenttUser());
  }
  protected usuario;
  protected datos = {

    "passwordNew": "",
    "passwordOld": ""
  }
  protected confirm = "";

  change(form: NgForm) {
    if (form.valid) {
      if (this.confirm == this.datos.passwordNew) {
        console.log(this.datos);
        this.userService.changePassword(this.datos)
          .subscribe(resp => {
            if (resp) {
              this.resetData();
            }
            else {
              alertify.alert("La vieja contraseña es incorreta");
              this.resetData();
            }
          });
      }
      else {
        alertify.alert("La nueva contraseña no coincide");
      }
    }
  }

  resetData() {
    this.datos = {
      "passwordOld": "",
      "passwordNew": ""
    }
    this.confirm = "";
  }

}
