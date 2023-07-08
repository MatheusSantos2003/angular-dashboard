/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule,LayoutComponent,SidebarComponent],
})
export class AppComponent {
  constructor(router: Router) {
    router.initialNavigation();
  }
}
