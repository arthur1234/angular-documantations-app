import {Component} from '@angular/core';
import {AuthenticationService, TokenPayload} from '../../services/authentication.service';
import {Router} from '@angular/router';

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
