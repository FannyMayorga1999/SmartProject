import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SibebarLiderComponent } from './sibebar-lider.component';

describe('SibebarLiderComponent', () => {
  let component: SibebarLiderComponent;
  let fixture: ComponentFixture<SibebarLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SibebarLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SibebarLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
