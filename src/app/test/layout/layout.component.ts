import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

interface MenuItem {
  id: string;
  icon: string;
  label: string;
  route: string;
}
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

 currentUser = {
    name: 'John Doe',
    email: 'john@company.com'
  };

  menuItems: MenuItem[] = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard', route: '/dashboard' },
    { id: 'requirements', icon: '📋', label: 'Requirements', route: '/requirements' },
    { id: 'repository', icon: '🗂️', label: 'Repository', route: '/repository' },
    { id: 'execution', icon: '▶️', label: 'Execution', route: '/execution' },
    { id: 'bugs', icon: '🐛', label: 'Bugs', route: '/bugs' },
    { id: 'reports', icon: '📈', label: 'Reports', route: '/reports' }
  ];

  constructor(public router: Router) {}

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  signOut(): void {
    // Implement sign out logic
    console.log('Signing out...');
  }

}
