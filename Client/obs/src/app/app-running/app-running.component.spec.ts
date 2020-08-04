import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRunningComponent } from './app-running.component';

describe('AppRunningComponent', () => {
  let component: AppRunningComponent;
  let fixture: ComponentFixture<AppRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
