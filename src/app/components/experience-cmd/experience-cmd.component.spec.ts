import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCmdComponent } from './experience-cmd.component';

describe('ExperienceCmdComponent', () => {
  let component: ExperienceCmdComponent;
  let fixture: ComponentFixture<ExperienceCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceCmdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
