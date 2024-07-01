import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCmdComponent } from './help-cmd.component';

describe('HelpCmdComponent', () => {
  let component: HelpCmdComponent;
  let fixture: ComponentFixture<HelpCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpCmdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
