import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SibebarEquipoComponent } from './sibebar-equipo.component';

describe('SibebarEquipoComponent', () => {
  let component: SibebarEquipoComponent;
  let fixture: ComponentFixture<SibebarEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SibebarEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SibebarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
