import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasLiderComponent } from './tareas-lider.component';

describe('TareasLiderComponent', () => {
  let component: TareasLiderComponent;
  let fixture: ComponentFixture<TareasLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
