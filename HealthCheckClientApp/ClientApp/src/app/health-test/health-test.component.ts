import { Component, OnInit } from '@angular/core';
import { QuestionWizardService } from '../_services/questionWizard.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-health-test',
  templateUrl: './health-test.component.html',
})
export class HealthTestComponent implements OnInit {
  private questionWizardSertvce: QuestionWizardService

  public selectFacility: any;
  public facilityList: Array<string>;

  constructor(
    ) {

  }

  ngOnInit(): void {
   

    //Get facility List
    this.facilityList = new Array<string>();
    this.facilityList.push('Corporate QH');
    this.facilityList.push('Company 2');
    this.facilityList.push('Company 3');


  }

  next() {
    console.log(this.selectFacility);
  }
}
