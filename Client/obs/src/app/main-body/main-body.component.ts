import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../animations/fade.animation';
//import { slideInAnimation } from '../animations/slide.animation';
@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
  animations: [fadeAnimation]
})
export class MainBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getRouterOutletState(outlet) {
    
    
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
