import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenHelper } from 'src/Utlis/Helpers/TokenHelper';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {

  constructor( private tokenHelper: TokenHelper,
    private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const hasToken = this.tokenHelper.hasToken();
      if (!hasToken) {
        this.router.navigate(['/register']);
        return false;
    }
    return true;
  }
}
