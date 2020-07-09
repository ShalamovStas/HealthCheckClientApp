import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit{

  ngOnInit(): void {
    this.initTabs();
    this.initProfileCardsHandler();
  }


  initTabs() {
    var tabNav = document.querySelectorAll('.tabs__link');
    var tabPanel = document.querySelectorAll('.tabs__panel');
    var tabName;
    tabNav.forEach(function (item) {
      item.addEventListener('click', selectTabNav);
  
      function selectTabNav(e) {
        e.preventDefault();
        tabNav.forEach(function (item) {
          item.classList.remove('tabs__link--active');
        });
        this.classList.add('tabs__link--active');
        tabName = this.getAttribute('data-tab-name');
        selectTabPanel(tabName);
      }
  
      function selectTabPanel(tabName) {
        tabPanel.forEach(function (panel) {
          panel.classList.contains(tabName) ? panel.classList.add('d-block') : panel.classList.remove('d-block');
        });
      }
    });
  }

  initProfileCardsHandler() {
    var btnsCardResult = document.querySelectorAll('.card-result__btn-js');
    if (btnsCardResult) {
      btnsCardResult.forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (this.parentElement.classList.contains('card-result--small')) {
            btnsCardResult.forEach(function (btn) {
              btn.parentElement.classList.remove('card-result--large');
              btn.parentElement.classList.add('card-result--small');
            });
            this.parentElement.classList.remove('card-result--small');
            this.parentElement.classList.add('card-result--large');
          } else {
            this.parentElement.classList.remove('card-result--large');
            this.parentElement.classList.add('card-result--small');
          }
        });
      });
    }
  }
}
