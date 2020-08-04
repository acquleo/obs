import { Component,HostListener } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';
//import { slideInAnimation } from './animations/slide.animation';
import { Subject } from 'rxjs';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent  {

  constructor(private auth : AuthServiceService) { 

    this.setTimeout();

    this.userInactive.subscribe(() => auth.logout());
  }

  userActivity;
  userInactive: Subject<any> = new Subject();
  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
  @HostListener('window:click') refreshUserState2() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 30000);
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}