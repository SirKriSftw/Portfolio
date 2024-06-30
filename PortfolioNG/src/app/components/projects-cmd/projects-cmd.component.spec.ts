import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCmdComponent } from './projects-cmd.component';

describe('ProjectsCmdComponent', () => {
  let component: ProjectsCmdComponent;
  let fixture: ComponentFixture<ProjectsCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsCmdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
