import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeCmdComponent } from './about-me-cmd.component';

describe('AboutMeCmdComponent', () => {
  let component: AboutMeCmdComponent;
  let fixture: ComponentFixture<AboutMeCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMeCmdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
