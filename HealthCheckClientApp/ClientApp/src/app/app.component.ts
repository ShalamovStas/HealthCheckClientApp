import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
// import { ConsoleReporter } from 'jasmine';

enum NavMenuType {
  BASIC = "BASIC",
  STARNDART = "STARNDART",
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'app';
  public includeFooter = false;
  public navMenuType = NavMenuType.BASIC;

  constructor(private _router: Router) {

  }

  ngOnInit() {
    this._router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
      }
      if (route instanceof NavigationEnd) {
        //this.btnUserMenuHandler(route.url);
        this.handleRouting(route.url);
      }

    });
  }

  private handleRouting(routeUrl: string) {
    if (routeUrl === '/login' || routeUrl === '/') {
      this.navMenuType = NavMenuType.BASIC;
    } else {
      this.navMenuType = NavMenuType.STARNDART;
    }

  }

  //Show/hide userDropdown menu 
  private btnUserMenuHandler(routeUrl: string) {
    let btn = document.querySelector('.btn-user.btn-reset.dropdown-toggle');
    console.log(routeUrl);

    if (btn) {
      if ((routeUrl === '/login' || routeUrl === '/') && btn) {
        btn.setAttribute("style", "display: none;")
      } else {
        btn.setAttribute("style", "")
      }
    }
  }
}