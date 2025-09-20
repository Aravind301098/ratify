import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  requirementsStats = [
    {
      title: 'Approved',
      value: '24',
      trend: '+12% from last week',
      trendClass: 'positive',
      icon: 'stat-icon-approved',
      color: 'green'
    },
    {
      title: 'Rejected',
      value: '3',
      trend: '-8% from last week',
      trendClass: 'negative',
      icon: 'stat-icon-rejected',
      color: 'red'
    },
    {
      title: 'In Progress',
      value: '8',
      trend: '-5% from last week',
      trendClass: 'negative',
      icon: 'stat-icon-progress',
      color: 'orange'
    },
    {
      title: 'Pending Review',
      value: '12',
      trend: '+14% from last week',
      trendClass: 'positive',
      icon: 'stat-icon-pending',
      color: 'blue'
    }
  ];

  testCaseOverview = [
    {
      title: 'Total Test Cases',
      value: '156',
      trend: '+24% from last week',
      trendClass: 'positive',
      icon: 'overview-icon-total',
      color: 'blue'
    },
    {
      title: 'Execution Rate',
      value: '78%',
      trend: '+4% from last week',
      trendClass: 'positive',
      icon: 'overview-icon-execution',
      color: 'green'
    },
    {
      title: 'Pass Rate',
      value: '92%',
      trend: '+2% from last week',
      trendClass: 'positive',
      icon: 'overview-icon-pass',
      color: 'green'
    }
  ];

  testCasePriorities = [
    { label: 'Critical', type: 'critical', count: '8' },
    { label: 'High', type: 'high', count: '24' },
    { label: 'Medium', type: 'medium', count: '67' },
    { label: 'Low', type: 'low', count: '57' }
  ];

  testTypesDistribution = [
    { label: 'Functional', percentage: 68, color: 'blue' },
    { label: 'Regression', percentage: 18, color: 'green' },
    { label: 'Performance', percentage: 8, color: 'orange' },
    { label: 'Security', percentage: 6, color: 'red' }
  ];

  defectBreakdown = [
    { label: 'Critical', type: 'critical', count: '2', priority: 'critical defects' },
    { label: 'High', type: 'high', count: '4', priority: 'high priority' },
    { label: 'Medium', type: 'medium', count: '6', priority: 'medium priority' }
  ];

  aiRecommendations = [
    {
      title: 'Focus on Critical Test Cases',
      description: '8 critical test cases need immediate attention for Sprint 12'
    },
    {
      title: 'Regression Testing Recommended',
      description: 'Based on recent changes, run regression suite for user authentication module'
    },
    {
      title: 'Performance Impact Alert',
      description: '2 high-priority defects may impact application performance'
    }
  ];

}
