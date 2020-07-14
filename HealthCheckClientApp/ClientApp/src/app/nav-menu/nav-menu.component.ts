import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoaderService } from '../_services/script-loader.service';
import { log } from 'util';

declare let mLayout: any;
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  // styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(private _router: Router,
    private _script: ScriptLoaderService, ) {

  }

  ngOnInit() {
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

    // this._script.loadScripts('body', [
    //   'assets/js/vendors.bundle.js',
    //   'assets/js/scripts.bundle.js'], true).then(() => {
    //     mLayout.initHeader();

    //   });

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

  logout() {
    this._router.navigate(['/login']);
  }

  close() {
    console.log("Close")
    var headerDropdown = document.querySelector('.header__dropdown');
    var headerDropdownActiveClass = 'header__dropdown--active'; // Hide Header on scroll down
    headerDropdown.classList.toggle(headerDropdownActiveClass);


  }
}
