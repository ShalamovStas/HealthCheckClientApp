import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../_services/data-sharing.service'
import { QuestionModelBase, QuestionType, DataForQuestionWithInputModel, ProgressBarViewModel } from '../_models/questionWizard/questionWizardModels';
import { QuestionWizardService } from '../_services/questionWizard.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-question-wizard',
  templateUrl: './question-wizard.component.html',
})
export class QuestionWizardComponent implements OnInit {

  private questionWizardSertvce: QuestionWizardService;

  public selectFacility: any;
  public inputModel: any;
  public currentQuestion: QuestionModelBase;
  public progressBarViewModel: ProgressBarViewModel;

  constructor(
    private dataSharingService: DataSharingService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.dataSharingService.selectedFacility.subscribe(value => {
      this.selectFacility = value;
    }
    );

    this.questionWizardSertvce = new QuestionWizardService(this.getQuestions());
    this.questionWizardSertvce.setStateReadyToStart();
    this.updateViewModels();
  }

  handleAnswer(answer: any) {
    this.questionWizardSertvce.handleAnswer(answer);
    this.moveForward();
  }

  private moveForward() {
    this.questionWizardSertvce.nextQuestion();
    this.updateViewModels();

    if (this.questionWizardSertvce.ifFinished()) {
      console.log("test finished");
      console.log(this.questionWizardSertvce.getAnswers());
      this._router.navigate(['/health-check-result']);


    }
  }

  moveBack() {
    this.questionWizardSertvce.previousQuestion();
    this.updateViewModels();
  }

  private updateViewModels() {
    this.inputModel = null;
    this.currentQuestion = this.questionWizardSertvce.getCurrentQuestion();
    this.progressBarViewModel = this.questionWizardSertvce.getProgressBarViewModel();
  }

  private getQuestions(): Array<QuestionModelBase> {
    let questions = Array<QuestionModelBase>();

    for (let index = 0; index < 11; index++) {
      let element = new (QuestionModelBase);
      element.id = index;
      element.questionText = `#${index} question?`;
      element.questionType = QuestionType.QuestionYesNo;
      questions.push(element);
    }

    let element = new (QuestionModelBase);
    element.id = questions.length;
    element.questionText = `What is your current body temperature?`;
    element.questionType = QuestionType.QuestionWithInput;
    element.dataForQuestionWithInput = new DataForQuestionWithInputModel();
    element.dataForQuestionWithInput.placeholderInput = "Temperature, F";
    questions.push(element);

    return questions;
  }

}
