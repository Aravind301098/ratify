import { Component } from '@angular/core';

interface ExecutionCycle {
  id: string;
  title: string;
  userStory: string;
  status: 'In Progress' | 'Passed' | 'Failed';
  environment: 'SIT' | 'UAT';
  progress: {
    overall: number;
    passRate: number;
  };
  testResults: {
    passed: number;
    failed: number;
    blocked: number;
    inProgress: number;
  };
  executionInfo: {
    started: string;
    ended?: string;
    assignee: string;
  };
}
@Component({
  selector: 'app-test-execution',
  standalone: true,
  imports: [],
  templateUrl: './test-execution.component.html',
  styleUrl: './test-execution.component.css'
})
export class TestExecutionComponent {

    passed = 63;
  failed = 12;
  blocked = 5;
  inProgress = 7;

  executionCycles: ExecutionCycle[] = [
    {
      id: 'EXE-001',
      title: 'Sprint 12 - Authentication Module',
      userStory: 'US-001',
      status: 'In Progress',
      environment: 'SIT',
      progress: {
        overall: 75,
        passRate: 83
      },
      testResults: {
        passed: 15,
        failed: 3,
        blocked: 2,
        inProgress: 4
      },
      executionInfo: {
        started: '2024-01-20',
        assignee: 'John Doe'
      }
    },
    {
      id: 'EXE-002',
      title: 'Sprint 12 - Dashboard Features',
      userStory: 'US-002',
      status: 'Passed',
      environment: 'UAT',
      progress: {
        overall: 94,
        passRate: 94
      },
      testResults: {
        passed: 16,
        failed: 1,
        blocked: 0,
        inProgress: 1
      },
      executionInfo: {
        started: '2024-01-18',
        ended: '2024-01-19',
        assignee: 'Jane Smith'
      }
    },
    {
      id: 'EXE-003',
      title: 'Regression Suite - Full App',
      userStory: 'Multiple',
      status: 'Failed',
      environment: 'SIT',
      progress: {
        overall: 89,
        passRate: 80
      },
      testResults: {
        passed: 32,
        failed: 8,
        blocked: 0,
        inProgress: 0
      },
      executionInfo: {
        started: '2024-01-15',
        ended: '2024-01-17',
        assignee: 'Mike Johnson'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  startNewExecution(): void {
    console.log('Starting new execution...');
  }

  pauseExecution(executionId: string): void {
    console.log('Pausing execution:', executionId);
  }

  stopExecution(executionId: string): void {
    console.log('Stopping execution:', executionId);
  }

  viewDetails(executionId: string): void {
    console.log('Viewing details for:', executionId);
  }

  viewFailedTests(executionId: string): void {
    console.log('Viewing failed tests for:', executionId);
  }

  exportReport(executionId: string): void {
    console.log('Exporting report for:', executionId);
  }

  viewLogs(executionId: string): void {
    console.log('Viewing logs for:', executionId);
  }

  getStatusBadgeClass(status: string): string {
    const classes: { [key: string]: string } = {
      'In Progress': 'status-progress',
      'Passed': 'status-passed',
      'Failed': 'status-failed'
    };
    return classes[status] || '';
  }

}
