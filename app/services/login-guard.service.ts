import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from "@angular/router";

import { LoginService } from "./login-service.service";

@Injectable()
export class LoginGuard implements CanActivateChild {
	constructor(
				private loginService: LoginService, 
				private router: Router
			) { }

	canActivateChild() {
		return this.loginService.getLoggedInUser().map(
			loggedInUser => {
				// console.log("Login Guard checking loggedInUser: ", loggedInUser);

				// return true; 
				if (loggedInUser) return true;

				this.router.navigate([""], {
					fragment: "login-needed"
				});

				return false;
			} 
		);
	}
}
