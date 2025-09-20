import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRepositoryComponent } from './test-repository.component';

describe('TestRepositoryComponent', () => {
  let component: TestRepositoryComponent;
  let fixture: ComponentFixture<TestRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRepositoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
