import { Component, OnInit, ViewChild } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  @ViewChild('rectangle') input; 

  constructor() { }

  ngOnInit(): void {
  }
  
  onResized(event: ResizedEvent) {
    let parent_w = event.element.nativeElement.clientWidth;
    let parent_h = event.element.nativeElement.clientHeight;

    if(parent_w > parent_h)
    {
      let child_side = `${parent_h}px`;
      let diff = parent_w -  parent_h;
      let half = `0 0 0 ${diff / 2}px`;;
      this.input.nativeElement.style.width = child_side;
      this.input.nativeElement.style.height  = child_side;
      this.input.nativeElement.style.margin = half;
      return;
    }

    if(parent_h > parent_w)
    {
      let child_side = `${parent_w}px`;
      let diff = parent_h -  parent_w;
      let half = `${diff / 2}px 0 0 0`;;
      this.input.nativeElement.style.width = child_side;
      this.input.nativeElement.style.height  = child_side;
      this.input.nativeElement.style.margin= half;
      return;
    }

    this.input.nativeElement.style.width = parent_w;
      this.input.nativeElement.style.height  = parent_h;
  }
}
