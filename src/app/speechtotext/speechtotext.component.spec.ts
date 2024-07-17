import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechtotextComponent } from './speechtotext.component';

describe('SpeechtotextComponent', () => {
  let component: SpeechtotextComponent;
  let fixture: ComponentFixture<SpeechtotextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechtotextComponent]
    });
    fixture = TestBed.createComponent(SpeechtotextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
