import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface TestCase {
  id: string;
  title: string;
  priority: 'High Priority' | 'Medium Priority' | 'Low Priority';
  type: 'Functional' | 'Performance' | 'Security';
  description: string;
  steps: string[];
  expectedResult: string;
}

@Component({
  selector: 'app-test-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test-generator.component.html',
  styleUrl: './test-generator.component.css'
})
export class TestGeneratorComponent {

   activeTab: 'upload' | 'url' = 'upload';
  selectedFiles: File[] = [];
  urlInput: string = '';
  isGenerating: boolean = false;
  generatedTestCases: TestCase[] = [];
  
  // URL/GitHub options
  requirementRequired: boolean = false;
  userStoriesRequired: boolean = true;
  nonFunctionalRequired: boolean = false;
  regressionSuiteRequired: boolean = false;

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/test/dashboard']);
  }

  switchTab(tab: 'upload' | 'url') {
    this.activeTab = tab;
    this.resetForm();
  }

  resetForm() {
    this.selectedFiles = [];
    this.urlInput = '';
    this.generatedTestCases = [];
    this.isGenerating = false;
  }

  onFileSelect(event: any) {
    const files = Array.from(event.target.files) as File[];
    this.selectedFiles = [...this.selectedFiles, ...files];
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  generateTestCases() {
    this.isGenerating = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isGenerating = false;
      
      if (this.activeTab === 'upload' && this.selectedFiles.length > 0) {
        this.generateFileBasedTestCases();
      } else if (this.activeTab === 'url' && this.urlInput.trim()) {
        this.generateUrlBasedTestCases();
      }
    }, 2000);
  }

  private generateFileBasedTestCases() {
    this.generatedTestCases = [
      {
        id: '1',
        title: 'User Login Validation',
        priority: 'High Priority',
        type: 'Functional',
        description: 'Validate user login with valid credentials',
        steps: [
          'Navigate to login page',
          'Enter valid email and password',
          'Click login button',
          'Verify successful login'
        ],
        expectedResult: 'User should be successfully logged in and redirected to dashboard'
      },
      {
        id: '2',
        title: 'Password Reset Functionality',
        priority: 'Medium Priority',
        type: 'Functional',
        description: 'Test password reset flow',
        steps: [
          'Click "Forgot Password" link',
          'Enter registered email',
          'Check email for reset link',
          'Follow reset instructions'
        ],
        expectedResult: 'User should receive reset email and be able to set new password'
      }
    ];
  }

  private generateUrlBasedTestCases() {
    this.generatedTestCases = [
      {
        id: '1',
        title: 'User Login Validation',
        priority: 'High Priority',
        type: 'Functional',
        description: 'Validate user login with valid credentials',
        steps: [
          'Navigate to login page',
          'Enter valid email and password',
          'Click login button',
          'Verify successful login'
        ],
        expectedResult: 'User should be successfully logged in and redirected to dashboard'
      },
      {
        id: '2',
        title: 'Password Reset Functionality',
        priority: 'Medium Priority',
        type: 'Functional',
        description: 'Test password reset flow',
        steps: [
          'Click "Forgot Password" link',
          'Enter registered email',
          'Check email for reset link',
          'Follow reset instructions'
        ],
        expectedResult: 'User should receive reset email and be able to set new password'
      }
    ];
  }

  executeAllTests() {
    console.log('Executing all test cases...');
  }

  editTestCase(testCase: TestCase) {
    console.log('Editing test case:', testCase.id);
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High Priority': return 'high-priority';
      case 'Medium Priority': return 'medium-priority';
      case 'Low Priority': return 'low-priority';
      default: return '';
    }
  }

  getTypeClass(type: string): string {
    switch (type) {
      case 'Functional': return 'functional';
      case 'Performance': return 'performance';
      case 'Security': return 'security';
      default: return '';
    }
  }

}
