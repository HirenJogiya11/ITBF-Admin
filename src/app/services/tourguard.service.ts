import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs/Observable";

@Injectable()
export class TourGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('role') === 'Admin') {
            // logged in so return true

            return Observable.fromPromise(Promise.resolve(true));
        } else {
            this.router.navigate(['/dashboard']);
            return Observable.fromPromise(Promise.resolve(false));
        }

        // not logged in so redirect to login page with the return url
    }
}