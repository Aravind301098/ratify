import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Bug {
  id: string;
  title: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Critical';
  severity: 'High' | 'Medium' | 'Low';
  environment: 'UAT' | 'SIT';
  impactAssessment: string;
  testTraceability: {
    testCase: string;
    userStory: string;
    requirement: string;
  };
  assignment: {
    assignee: string;
    reporter: string;
    created: string;
  };
}
@Component({
  selector: 'app-bug-management',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bug-management.component.html',
  styleUrl: './bug-management.component.css'
})
export class BugManagementComponent {

   openBugs = 12;
  inProgress = 8;
  resolved = 34;
  critical = 3;

  searchTerm = '';
  selectedStatus = 'All Status';
  selectedSeverity = 'All Severity';
  selectedEnvironment = 'All Environments';

  bugs: Bug[] = [
    {
      id: 'BUG-001',
      title: 'Login button not responding on mobile devices',
      description: 'Users are unable to click the login button on iPhone Safari browser',
      status: 'Open',
      severity: 'High',
      environment: 'UAT',
      impactAssessment: 'Blocks user authentication on mobile',
      testTraceability: {
        testCase: 'TC-AUTH-001',
        userStory: 'US-001',
        requirement: 'REQ-001'
      },
      assignment: {
        assignee: 'John Doe',
        reporter: 'Jane Smith',
        created: '2024-01-20'
      }
    },
    {
      id: 'BUG-002',
      title: 'Dashboard charts not loading with large datasets',
      description: 'Performance degradation when loading charts with more than 1000 data points',
      status: 'In Progress',
      severity: 'Medium',
      environment: 'SIT',
      impactAssessment: 'Affects user experience for large accounts',
      testTraceability: {
        testCase: 'TC-DASH-008',
        userStory: 'US-002',
        requirement: 'REQ-003'
      },
      assignment: {
        assignee: 'Mike Johnson',
        reporter: 'Sarah Wilson',
        created: '2024-01-19'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  reportNewBug(): void {
    console.log('Opening new bug report form...');
  }

  editBug(bugId: string): void {
    console.log('Editing bug:', bugId);
  }

  viewDetails(bugId: string): void {
    console.log('Viewing bug details:', bugId);
  }

  changeStatus(bugId: string): void {
    console.log('Changing status for bug:', bugId);
  }

  addComment(bugId: string): void {
    console.log('Adding comment to bug:', bugId);
  }

  attachFiles(bugId: string): void {
    console.log('Attaching files to bug:', bugId);
  }

  getStatusBadgeClass(status: string): string {
    const classes: { [key: string]: string } = {
      'Open': 'status-open',
      'In Progress': 'status-progress',
      'Resolved': 'status-resolved',
      'Critical': 'status-critical'
    };
    return classes[status] || '';
  }

  getSeverityBadgeClass(severity: string): string {
    const classes: { [key: string]: string } = {
      'High': 'severity-high',
      'Medium': 'severity-medium',
      'Low': 'severity-low'
    };
    return classes[severity] || '';
  }
}
