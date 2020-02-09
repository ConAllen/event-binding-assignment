import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.sass']
})
export class GameControllerComponent implements OnInit {

  @Output() incrementFired = new EventEmitter<number>();
  increment;
  lastIncrementNumber = 0;
  pauseIncrement;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.increment = setInterval(() => {
      this.incrementFired.emit(this.lastIncrementNumber + 1);
      this.lastIncrementNumber++;
    }, 1000);

  }

  onPauseGame() {
    clearInterval(this.increment);
  }

}
