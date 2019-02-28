import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiderLayoutComponent } from './lider-layout.component';

describe('LiderLayoutComponent', () => {
  let component: LiderLayoutComponent;
  let fixture: ComponentFixture<LiderLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiderLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
