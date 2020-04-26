import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../services/authentication.service';
import {TokenPayload} from '../../shared/interfaces';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
    credentials: TokenPayload = {
      _id: '',
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };

    constructor(
      private auth: AuthenticationService,
      private router: Router
    ) {}

    login() {
      this.auth.login(this.credentials).subscribe (
        () => {
          this.router.navigateByUrl('/start');
        },
        error => {
          console.error(error);
        }
      );
    }
}
