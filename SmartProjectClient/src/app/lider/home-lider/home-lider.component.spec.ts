import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLiderComponent } from './home-lider.component';

describe('HomeLiderComponent', () => {
  let component: HomeLiderComponent;
  let fixture: ComponentFixture<HomeLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
