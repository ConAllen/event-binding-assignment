import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'game-app';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];



  onIncrementedAdded(firedNumber: number) {
    // console.log(event);

    if (firedNumber % 2 === 0 ) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }


}
