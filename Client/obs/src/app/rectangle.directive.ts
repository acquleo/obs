import { Directive, ElementRef,OnInit,OnDestroy } from '@angular/core';
import { ResizeSensor } from 'css-element-queries';

@Directive({
  selector: '[appRectangle]'
})
export class RectangleDirective {

  private resizeSensor: ResizeSensor;
  private element: ElementRef;
  private parent_element: any;

  constructor(el: ElementRef) {
    this.element=el;
    
 }

 ngOnInit(): void {
if (ResizeSensor) {
      this.parent_element=this.element.nativeElement.parentElement;
      this.resizeSensor = new ResizeSensor(this.parent_element, () => this.onResized());
    }
}

private onResized() {
    let parent_w = this.parent_element.clientWidth;
    let parent_h = this.parent_element.clientHeight;

    if(parent_w > parent_h)
    {
      let child_side = `${parent_h}px`;
      let diff = parent_w -  parent_h;
      let half = `0 0 0 ${diff / 2}px`;;
      this.element.nativeElement.style.width = child_side;
      this.element.nativeElement.style.height  = child_side;
      this.element.nativeElement.style.margin = half;
      return;
    }

    if(parent_h > parent_w)
    {
      let child_side = `${parent_w}px`;
      let diff = parent_h -  parent_w;
      let half = `${diff / 2}px 0 0 0`;;
      this.element.nativeElement.style.width = child_side;
      this.element.nativeElement.style.height  = child_side;
      this.element.nativeElement.style.margin= half;
      return;
    }

    this.element.nativeElement.style.width = parent_w;
    this.element.nativeElement.style.height  = parent_h;
}

ngOnDestroy(): void {
  if (this.resizeSensor) {
    this.resizeSensor.detach();
  }
}
}
