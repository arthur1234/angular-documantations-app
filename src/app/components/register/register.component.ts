import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../services/authentication.service';
import {TokenPayload} from '../../shared/interfaces';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
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
  ) {
  }

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/start');
      },
      error => {
        console.error(error);
      }
    );
  }
}
