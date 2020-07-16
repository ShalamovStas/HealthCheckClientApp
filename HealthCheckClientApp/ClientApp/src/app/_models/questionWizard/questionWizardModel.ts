export enum State {
    ReadyToCheck,
    InProgress,
    Finished
}

export class QuestionWizardStateMachine {
    private state: State;
    private currentQuestionIndex: number;
    private answers: Map<number, boolean>

    constructor(private questions: Array<string>) {
        this.init();
        this.stateReadyToCheck();
    }

    init(){
        this.answers = new Map<number, boolean>();
    }

    stateReadyToCheck() {
        this.currentQuestionIndex = 0;
        this.answers.clear();
    }

    handleAnswer(answer: boolean) {
        this.answers.set(this.currentQuestionIndex, answer);
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
            this.stateReadyToCheck();
            return;
        }
        this.answers.delete(this.currentQuestionIndex);
    }

    getState(): State {
        return this.state;
    }

    private setState(value: State) {
        this.state = value;
    }
}