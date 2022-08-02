import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthenticationService} from "../service/authentication.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  currentUser: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.authService.currentUser.subscribe(
      currentUser => {
        this.currentUser = currentUser;
      }
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!!this.currentUser) {
      return true;
    } else {
      this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}
