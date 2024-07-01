import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCmdComponent } from './skills-cmd.component';

describe('SkillsCmdComponent', () => {
  let component: SkillsCmdComponent;
  let fixture: ComponentFixture<SkillsCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsCmdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
