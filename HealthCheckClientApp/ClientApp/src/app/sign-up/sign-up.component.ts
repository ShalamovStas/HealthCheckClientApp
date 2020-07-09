import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit{


  ngOnInit(): void {
    //this.initModalPrivacyHandler()
  }

 

  closeModalPrivacy() {
    var body = document.querySelector('body');
    body.classList.remove('modal-open-privacy');
  }

  openModalPrivacy(){
    var body = document.querySelector('body');
    body.classList.add('modal-open-privacy');
  }

  initModalPrivacyHandler() {
    var body = document.querySelector('body');
    var btnPrivacy = document.querySelectorAll('.btn-privacy-js');

    btnPrivacy.forEach(function (btn) {
      btn.addEventListener('click', function () {
        body.classList.add('modal-open-privacy');
      });
    });
  }
}
