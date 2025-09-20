import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugManagementComponent } from './bug-management.component';

describe('BugManagementComponent', () => {
  let component: BugManagementComponent;
  let fixture: ComponentFixture<BugManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BugManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BugManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
