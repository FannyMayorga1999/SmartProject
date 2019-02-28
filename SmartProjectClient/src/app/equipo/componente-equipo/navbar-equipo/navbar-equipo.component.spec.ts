import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEquipoComponent } from './navbar-equipo.component';

describe('NavbarEquipoComponent', () => {
  let component: NavbarEquipoComponent;
  let fixture: ComponentFixture<NavbarEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
