import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoLiderComponent } from './proyecto-lider.component';

describe('ProyectoLiderComponent', () => {
  let component: ProyectoLiderComponent;
  let fixture: ComponentFixture<ProyectoLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
