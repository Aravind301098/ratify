import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestGeneratorComponent } from './test-generator/test-generator.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TestRepositoryComponent } from './test-repository/test-repository.component';
import { TestExecutionComponent } from './test-execution/test-execution.component';
import { TestClosureReportsComponent } from './test-closure-reports/test-closure-reports.component';
import { BugManagementComponent } from './bug-management/bug-management.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test-generator', component: TestGeneratorComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'test-repository', component: TestRepositoryComponent },
  { path: 'test-execution', component: TestExecutionComponent },
  { path: 'test-closure-reports', component: TestClosureReportsComponent },
  { path: 'bug-management', component: BugManagementComponent },
  { path: 'test-generator', component: TestGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
