export enum State {
    ReadyToCheck,
    InProgress,
    Finished
}

export class TestResultModel {
    success: boolean;
    errorMessage: string;
    questions: Array<QuestionModelBase>
}

export enum QuestionType {
    QuestionYesNo,
    QuestionWithInput
}

export class QuestionModelBase {
    id: number;
    questionType: QuestionType;
    questionText: string;
    answer: any;
    dataForQuestionWithInput: DataForQuestionWithInputModel;
}

export class DataForQuestionWithInputModel {
    placeholderInput: string;
    maxValue: number;
    minValue: number;
}

export class ProgressBarHandler {
    private currentQuestionNumber: number

    constructor(private questionsCount: number) {

    }

    initProgressBar() {
        this.currentQuestionNumber = 1;
    }

    moveForward() {
        this.currentQuestionNumber++;
        if (this.currentQuestionNumber == this.questionsCount)
            this.currentQuestionNumber = this.questionsCount;
    }

    moveBack() {
        if (this.currentQuestionNumber == 1)
            return;
        this.currentQuestionNumber--;
    }

    private getProgress(): number {
        let p = (this.currentQuestionNumber/ this.questionsCount ) * 100; 
        return p;
    }

    getProgressBarViewModel(): ProgressBarViewModel{
        let progressBarViewModel = new ProgressBarViewModel();
        progressBarViewModel.currentQuestion = this.currentQuestionNumber;
        progressBarViewModel.questionsCount = this.questionsCount;
        progressBarViewModel.progress = this.getProgress();
        return progressBarViewModel;
    }
}

export class ProgressBarViewModel{
    public currentQuestion: number;
    public questionsCount: number;
    public progress: number;
}