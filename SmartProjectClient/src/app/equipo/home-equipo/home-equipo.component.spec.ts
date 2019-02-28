import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEquipoComponent } from './home-equipo.component';

describe('HomeEquipoComponent', () => {
  let component: HomeEquipoComponent;
  let fixture: ComponentFixture<HomeEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
