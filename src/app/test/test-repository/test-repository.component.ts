import { Component } from '@angular/core';

interface UserStory {
  id: string;
  title: string;
  status: 'Approved' | 'In Progress' | 'Pending';
  progress: number;
  requirements: string[];
}

interface TestCaseMetrics {
  functional: number;
  load: number;
  performance: number;
  regression: number;
  vulnerability: number;
}
@Component({
  selector: 'app-test-repository',
  standalone: true,
  imports: [],
  templateUrl: './test-repository.component.html',
  styleUrl: './test-repository.component.css'
})
export class TestRepositoryComponent {

  userStories = 3;
  totalTestCases = 156;
  approved = 78;
  executed = 45;

  selectedUserStory: UserStory | null = null;
  selectedEnvironment: 'SIT' | 'UAT' = 'SIT';

  userStoriesList: UserStory[] = [
    {
      id: 'US-001',
      title: 'User Authentication',
      status: 'Approved',
      progress: 85,
      requirements: ['REQ-001', 'REQ-002']
    },
    {
      id: 'US-002',
      title: 'Dashboard Management',
      status: 'In Progress',
      progress: 60,
      requirements: ['REQ-003', 'REQ-004']
    },
    {
      id: 'US-003',
      title: 'Reporting System',
      status: 'Pending',
      progress: 25,
      requirements: ['REQ-005']
    }
  ];

  testCaseMetrics: TestCaseMetrics = {
    functional: 12,
    load: 3,
    performance: 2,
    regression: 5,
    vulnerability: 2
  };

  constructor() { }

  ngOnInit(): void {
  }

  exportRepository(): void {
    console.log('Exporting repository...');
  }

  selectUserStory(userStory: UserStory): void {
    this.selectedUserStory = userStory;
  }

  clearSelection(): void {
    this.selectedUserStory = null;
  }

  executeAllTestCases(): void {
    console.log('Executing all test cases...');
  }

  reviewTestCases(): void {
    console.log('Opening test cases for review...');
  }

  switchEnvironment(env: 'SIT' | 'UAT'): void {
    this.selectedEnvironment = env;
  }

  getStatusBadgeClass(status: string): string {
    const classes: { [key: string]: string } = {
      'Approved': 'status-approved',
      'In Progress': 'status-progress',
      'Pending': 'status-pending'
    };
    return classes[status] || '';
  }

}
