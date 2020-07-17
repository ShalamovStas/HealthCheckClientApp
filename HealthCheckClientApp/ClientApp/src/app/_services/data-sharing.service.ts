import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {QuestionModelBase} from '../_models/questionWizard/questionWizardModels'

@Injectable()
export class DataSharingService {
  public selectedFacility: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public healthCheckAnswers: BehaviorSubject<Array<QuestionModelBase>> = new BehaviorSubject<Array<QuestionModelBase>>(null);
}