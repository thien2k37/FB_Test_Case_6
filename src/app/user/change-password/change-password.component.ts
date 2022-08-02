import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";
import {UserToken} from "../../model/user-token";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  // @ts-ignore
  currentUser: User;
  // @ts-ignore
  sub: Subscription;
  // @ts-ignore
  currentUserToken: UserToken;
  newPasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService,
              private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private authService: AuthenticationService) {

  }

  ngOnInit() {
  }


  changePassword() {
    const user = this.setNewUser();
    if(this.newPasswordForm.value.oldPassword === localStorage.getItem('PASS')) {
      if (this.newPasswordForm.value.password === this.newPasswordForm.value.confirmPassword) {
        this.authService.currentUser.subscribe(
          currentUser => {
            this.userService.changePass(currentUser.id, user).subscribe(() => {
              alert('Đổi mật khẩu thành công');
              localStorage.setItem('PASS', this.newPasswordForm.value.password);
              this.newPasswordForm.reset();
              this.router.navigateByUrl('/user');
            }, err => {
              console.log(err)
            });
          }
        )
      }
      else {
        alert('ko trung');
      }
    }else {
      alert('mk ko ddung ');
    }
  }

  private setNewUser() {
    // @ts-ignore
    const user: User = {
      password: this.newPasswordForm.value.password,
      confirmPassword: this.newPasswordForm.value.confirmPassword,
    };
    return user;
  }
}

