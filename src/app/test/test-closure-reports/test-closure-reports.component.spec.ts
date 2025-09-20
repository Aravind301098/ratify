import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestClosureReportsComponent } from './test-closure-reports.component';

describe('TestClosureReportsComponent', () => {
  let component: TestClosureReportsComponent;
  let fixture: ComponentFixture<TestClosureReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestClosureReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestClosureReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
