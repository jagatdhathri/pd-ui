import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRibbonComponent } from './nav-ribbon.component';

describe('NavRibbonComponent', () => {
  let component: NavRibbonComponent;
  let fixture: ComponentFixture<NavRibbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRibbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
