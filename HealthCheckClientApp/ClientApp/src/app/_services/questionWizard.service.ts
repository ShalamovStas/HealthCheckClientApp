import { Injectable } from "@angular/core";
import { State, TestResultModel, QuestionModelBase, ProgressBarHandler, ProgressBarViewModel } from "../_models/questionWizard/questionWizardModels"
import { QuestionWizardStateMachine } from "../_models/questionWizard/questionWizardSM"

@Injectable()
export class QuestionWizardService {

    private questionWizardSM: QuestionWizardStateMachine;
    private progressBarHandler: ProgressBarHandler;

    constructor(private questions: Array<QuestionModelBase>) {
        this.questionWizardSM = new QuestionWizardStateMachine(this.questions);
        this.progressBarHandler = new ProgressBarHandler(this.questions.length);
    }   

    getProgressBarViewModel(){
        return this.progressBarHandler.getProgressBarViewModel();
    }

    setStateReadyToStart(){
        this.questionWizardSM.stateReadyToCheck();
        this.progressBarHandler.initProgressBar();
    }

    handleAnswer(answer: any) {
        this.questionWizardSM.handleAnswer(answer);
    }

    nextQuestion(){
        this.questionWizardSM.stateNextQuestion();
        this.progressBarHandler.moveForward();
    }

    getCurrentQuestion(): QuestionModelBase{
        return this.questionWizardSM.getCurrentQuestion();
    }

    previousQuestion() : QuestionModelBase{
        this.questionWizardSM.statePreviousQuestion();
        this.progressBarHandler.moveBack();
        return this.questionWizardSM.getCurrentQuestion();
    }

    ifFinished(): boolean{
        return this.questionWizardSM.ifTestIsFinished()
    }

    getAnswers(): TestResultModel {
        let testResult = new TestResultModel();
        testResult.questions = this.questions;

        if (this.questionWizardSM.ifTestIsFinished()) {
            testResult.success = true;
        }
        else {
            testResult.success = false;
            testResult.errorMessage = 'Test not finished yet!';
        }
        return testResult;
    }
}