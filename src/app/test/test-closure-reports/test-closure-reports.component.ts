import { Component } from '@angular/core';

interface SprintReport {
  id: string;
  status: 'COMPLETED' | 'IN_PROGRESS';
  title: string;
  dateRange: string;
  requirements: {
    total: number;
    approved: number;
    rejected: number;
  };
  testExecution: {
    coverage: number;
    passed: number;
    failed: number;
  };
  defectAnalysis: {
    totalFound: number;
    resolved: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  qualityMetrics: {
    passRate: number;
    resolutionRate: number;
  };
  keyInsights: string[];
}
@Component({
  selector: 'app-test-closure-reports',
  standalone: true,
  imports: [],
  templateUrl: './test-closure-reports.component.html',
  styleUrl: './test-closure-reports.component.css'
})
export class TestClosureReportsComponent {
 totalSprints = 3;
  avgCoverage = 95;
  passRate = 88;
  totalDefects = 48;

  sprintReports: SprintReport[] = [
    {
      id: 'Sprint-12',
      status: 'COMPLETED',
      title: 'Authentication & Security Module',
      dateRange: 'Jan 15 - Jan 29, 2024',
      requirements: {
        total: 8,
        approved: 7,
        rejected: 1
      },
      testExecution: {
        coverage: 93,
        passed: 132,
        failed: 13
      },
      defectAnalysis: {
        totalFound: 18,
        resolved: 15,
        critical: 2,
        high: 2,
        medium: 8,
        low: 6
      },
      qualityMetrics: {
        passRate: 91,
        resolutionRate: 83
      },
      keyInsights: [
        '145/156 test cases executed (93% coverage)',
        '8 high-priority defects identified',
        '15/18 defects resolved',
        'Quality gate: PASSED'
      ]
    },
    {
      id: 'Sprint-11',
      status: 'COMPLETED',
      title: 'Dashboard & Analytics',
      dateRange: 'Jan 1 - Jan 14, 2024',
      requirements: {
        total: 12,
        approved: 11,
        rejected: 1
      },
      testExecution: {
        coverage: 97,
        passed: 185,
        failed: 13
      },
      defectAnalysis: {
        totalFound: 22,
        resolved: 20,
        critical: 1,
        high: 1,
        medium: 12,
        low: 8
      },
      qualityMetrics: {
        passRate: 93,
        resolutionRate: 91
      },
      keyInsights: []
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  generateNewReport(): void {
    console.log('Generating new report...');
  }

  viewDetails(sprintId: string): void {
    console.log('Viewing details for', sprintId);
  }

  exportPDF(sprintId: string): void {
    console.log('Exporting PDF for', sprintId);
  }
}
