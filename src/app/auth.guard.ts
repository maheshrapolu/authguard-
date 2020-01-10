import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private routes : Router,
    private localSt:LocalStorageService ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(this.localSt.retrieve('loginDetaisl')!= null){
        return true;
      }
      else
      {
        this.routes.navigate(['/login']);
        return false;
      }
  }
}
