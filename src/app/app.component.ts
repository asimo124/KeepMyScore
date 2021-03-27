import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keep-my-score';

  yourScore = 0;
  theirScore = 0;

  increaseYourScore() {
    this.yourScore += 1;
  }

  decreaseYourScore() {
    if (this.yourScore > 0) {
      this.yourScore -= 1;
    }
  }

  increaseTheirScore() {
    this.theirScore += 1;
  }

  decreaseTheirScore() {
    if (this.theirScore > 0) {
      this.theirScore -= 1;
    }
  }
}
