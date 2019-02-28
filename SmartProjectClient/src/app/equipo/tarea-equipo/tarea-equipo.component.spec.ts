import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaEquipoComponent } from './tarea-equipo.component';

describe('TareaEquipoComponent', () => {
  let component: TareaEquipoComponent;
  let fixture: ComponentFixture<TareaEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
