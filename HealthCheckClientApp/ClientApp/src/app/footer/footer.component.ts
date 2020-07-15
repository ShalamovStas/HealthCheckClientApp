import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {

    year: any;

    constructor() {
        this.year = (new Date()).getFullYear();
    }
    ngOnInit() {
        //Close footer realization 
        // var btnLanguage = document.querySelector('.btn-language-js');
        // var dropdownLanguage = document.querySelector('.dropdown-language');
        // btnLanguage.addEventListener('click', function () {
        //     if (dropdownLanguage) {
        //       dropdownLanguage.classList.toggle('dropdown-language--active');
        //     }
        //   });

    }

}