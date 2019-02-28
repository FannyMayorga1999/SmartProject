import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLiderComponent } from './footer-lider.component';

describe('FooterLiderComponent', () => {
  let component: FooterLiderComponent;
  let fixture: ComponentFixture<FooterLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
