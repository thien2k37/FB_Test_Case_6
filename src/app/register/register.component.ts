import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {User} from "../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[] = [];
  msv: any;
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    msv: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register() {
  }

}
