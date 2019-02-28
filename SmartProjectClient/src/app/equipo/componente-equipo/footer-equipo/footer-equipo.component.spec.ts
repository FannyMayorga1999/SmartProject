import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEquipoComponent } from './footer-equipo.component';

describe('FooterEquipoComponent', () => {
  let component: FooterEquipoComponent;
  let fixture: ComponentFixture<FooterEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
