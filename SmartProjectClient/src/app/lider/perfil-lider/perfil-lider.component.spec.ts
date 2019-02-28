import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilLiderComponent } from './perfil-lider.component';

describe('PerfilLiderComponent', () => {
  let component: PerfilLiderComponent;
  let fixture: ComponentFixture<PerfilLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
