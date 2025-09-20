import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestGeneratorComponent } from './test-generator/test-generator.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestRoutingModule,
    DashboardComponent, 
    TestGeneratorComponent
  ]
})
export class TestModule { }
