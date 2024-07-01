import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsCmdComponent } from './testimonials-cmd.component';

describe('TestimonialsCmdComponent', () => {
  let component: TestimonialsCmdComponent;
  let fixture: ComponentFixture<TestimonialsCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialsCmdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialsCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
