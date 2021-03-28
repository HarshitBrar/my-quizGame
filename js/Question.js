class Question{
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.question = createElement('h2');
      }
      hide(){
        this.question.hide();
        this.button.hide();
        this.input.hide();
      }
      display(){
          this.title.html("MyQuiz Game");
          this.title.position(350,0);

          this.question.html("Question: What starts and ends with a letter 'E', but has only one letter? ");
          this.question.position(150,80);
          this.option1.html("1: Everyone ");
          this.option1.position(150,100);
          this.option2.html("2: Envelope ");
          this.option2.position(150,120);
          this.option3.html("3: Estimate ");
          this.option3.position(150,150);
          this.option4.html("4: Example ");
          this.option4.position(150,180);
          this.input1.html("")
          this.input1.positon(150,230);
          
      }
}