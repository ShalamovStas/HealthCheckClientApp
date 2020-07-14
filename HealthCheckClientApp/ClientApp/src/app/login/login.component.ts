import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(private _router: Router){}

  signIn(){
    console.log("sign-in");
    //currentUser
    let user = {
      name: "currentUser",
      email: "testEmail"
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    this._router.navigate(['/home']);
  }
}
