import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.sass']
})
export class OddComponent implements OnInit {

  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
