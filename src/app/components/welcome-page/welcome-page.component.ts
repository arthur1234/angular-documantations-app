import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(

    public auth:AuthenticationService,
    public router:Router
  ) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigateByUrl('/start');
    }
  }

}
