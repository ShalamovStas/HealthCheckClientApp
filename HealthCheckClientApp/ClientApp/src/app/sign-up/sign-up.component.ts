import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  heroForm: FormGroup;
  constructor(private fb: FormBuilder){
  }

  ngOnInit(): void {
    //this.initModalPrivacyHandler()
    this.heroForm = this.fb.group({
        heroId: 'batman',
        agree: null
    });
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
