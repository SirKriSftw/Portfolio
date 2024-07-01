import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsCmdComponent } from './commands-cmd.component';

describe('CommandsCmdComponent', () => {
  let component: CommandsCmdComponent;
  let fixture: ComponentFixture<CommandsCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommandsCmdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandsCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
