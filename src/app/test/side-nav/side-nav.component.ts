import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  navigationItems = [
    { label: 'Dashboard', icon: 'nav-icon-dashboard', active: true },
    { label: 'Requirements', icon: 'nav-icon-requirements', active: false },
    { label: 'Repository', icon: 'nav-icon-repository', active: false },
    { label: 'Execution', icon: 'nav-icon-execution', active: false },
    { label: 'Bugs', icon: 'nav-icon-bugs', active: false },
    { label: 'Reports', icon: 'nav-icon-reports', active: false }
  ];

  setActive(selectedItem: any) {
    this.navigationItems.forEach(item => item.active = false);
    selectedItem.active = true;
  }
}
