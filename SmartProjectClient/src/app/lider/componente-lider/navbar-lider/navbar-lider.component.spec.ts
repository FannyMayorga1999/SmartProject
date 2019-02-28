import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLiderComponent } from './navbar-lider.component';

describe('NavbarLiderComponent', () => {
  let component: NavbarLiderComponent;
  let fixture: ComponentFixture<NavbarLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
