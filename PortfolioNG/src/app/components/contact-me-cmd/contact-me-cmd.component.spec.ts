import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeCmdComponent } from './contact-me-cmd.component';

describe('ContactMeCmdComponent', () => {
  let component: ContactMeCmdComponent;
  let fixture: ComponentFixture<ContactMeCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactMeCmdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactMeCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
