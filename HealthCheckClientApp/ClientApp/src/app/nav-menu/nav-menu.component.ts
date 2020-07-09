import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent  implements OnInit {

  constructor(private _router: Router){

  }

  ngOnInit(){
    var header = document.querySelector('.header');
    var headerHide = 'header--hide';
    var prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', function () {
      var currentScrollPos = window.pageYOffset;
  
      if (prevScrollpos < currentScrollPos) {
        header.classList.add(headerHide);
      } else {
        header.classList.remove(headerHide);
      }
  
      prevScrollpos = currentScrollPos;
    });

    this.toggleUserDropdown();
  }

  toggleUserDropdown() {
    var dropdownUser = document.querySelector('.dropdown-user__menu-js');
    var btnUser = document.querySelector('.btn-user-js');
    var headerDropdown = document.querySelector('.header__dropdown');
    var headerDropdownActiveClass = 'header__dropdown--active';
    if (dropdownUser) {
      btnUser.addEventListener('click', function () {
        headerDropdown.classList.toggle(headerDropdownActiveClass);
      });
    }
  }

  logout(){
    this._router.navigate(['/login']);
  }
}
