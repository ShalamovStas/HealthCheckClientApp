import { State, TestResultModel, QuestionType, QuestionModelBase } from './questionWizardModels'

export class QuestionWizardStateMachine {
    private state: State;
    private currentQuestionIndex: number;

    constructor(private questions: Array<QuestionModelBase>) {
        this.currentQuestionIndex = -1;
    }

    getCurrentQuestion(): QuestionModelBase {
        if (this.state == State.Finished)
            return undefined;
        return this.questions[this.currentQuestionIndex];
    }

    stateReadyToCheck() {
        this.currentQuestionIndex = 0;
    }

    handleAnswer(userAnswer: any) {
        let currentQuestion = this.questions[this.currentQuestionIndex];
        currentQuestion.answer = userAnswer;
    }

    stateNextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex == this.questions.length) {
            this.currentQuestionIndex = this.questions.length;
            this.setState(State.Finished);
        }
    }

    statePreviousQuestion() {
        this.currentQuestionIndex--;
        if (this.currentQuestionIndex <= 0) {
            this.currentQuestionIndex = 0;
            return;
        }
        let currentQuestion = this.questions[this.currentQuestionIndex];
        currentQuestion.answer = undefined;
    }

    getState(): State {
        return this.state;
    }

    ifTestIsFinished(): boolean {
        return this.state == State.Finished;
    }

    private setState(value: State) {
        this.state = value;
    }
}

