import { Injectable } from "@angular/core";
import {State, QuestionWizardStateMachine} from "../../_models/questionWizard/questionWizardModel"

@Injectable()
export class QuestionWizardService {

    private questionWizardSM : QuestionWizardStateMachine;
    private questions: Array<string>;

    constructor(questions: Array<string>) {
        this.questionWizardSM = new QuestionWizardStateMachine(questions);
    }

}