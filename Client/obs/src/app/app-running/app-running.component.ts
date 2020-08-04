import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-running',
  templateUrl: './app-running.component.html',
  styleUrls: ['./app-running.component.css']
})



export class AppRunningComponent implements OnInit {

  colors: any = [
    'red',
    'green',
    'blue',
    'black'
  ];

  actual_colors: any = [
    'red',
    'green',
    'blue',
    'black'
  ];

  index: number = 0;
  tempindex : number;
  interval;

  constructor() {
    this.startTimer();
   }

  ngOnInit(): void {
    this.setcolor();
  }

  ngOnDestroy(): void {
    this.pauseTimer();
  }


  startTimer() {
    
    this.interval = setInterval(() => {
      this.setcolor();
    }, 1000)
  }

  pauseTimer() {
    
    clearInterval(this.interval);
  }

  setcolor()
  {
    this.index++;
    if(this.index>3) this.index=0;

    this.tempindex=this.index;
    let val = this.tempindex % 4;
    this.actual_colors[val] = this.colors[3];
    this.tempindex++;
    val = this.tempindex % 4;
    this.actual_colors[val] = this.colors[2];
    this.tempindex++;
    val = this.tempindex % 4;
    this.actual_colors[val] = this.colors[1];
    this.tempindex++;
    val = this.tempindex % 4;
    this.actual_colors[val] = this.colors[0];
  }

}
