import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { 
    this.startTimer();

  }
  clock:string;
  interval;

  ngOnInit(): void {
    this.setclock();
  }

  ngOnDestroy(): void {
    this.pauseTimer();
  }

  
  startTimer() {
    
    this.interval = setInterval(() => {
      this.setclock();
    }, 1000)
  }

  pauseTimer() {
    
    clearInterval(this.interval);
  }

  
  setclock() {
    var date = new Date();
    this.clock = date.toLocaleString();
  }


}
