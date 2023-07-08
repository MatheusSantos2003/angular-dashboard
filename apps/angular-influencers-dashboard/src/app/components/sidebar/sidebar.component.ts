import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent{

  @Input() items = [
    // {
    //   label: 'Home',
    //   icon: 'bi-house',
    //   link: '/',
    //   active: false,
    // },
    {
      label: 'Collections',
      icon: 'bi-layers-fill',
      link: '/collections',
      active: true,
    },
    {
      label: "Views",
      icon: 'bi-eye-fill',
      link: '/views',
      active: false,
    },
    {
      label: "Apps",
      icon: 'bi-grid-fill',
      link: '/apps',
      active: false,
    },
    // {
    //   label: 'SubCollections',
    //   icon: 'bi-diagram-2-fill',
    //   link: '/subcollections',
    //   active: false
    // },
    {
      label: 'Users',
      icon: 'bi-people',
      link: '/users',
      active: false,
    },
    {
      label: 'Groups',
      icon: 'bi-shield-lock',
      link: '/groups',
      active: false,
    },
    // {
    //   label: 'Settings',
    //   icon: 'bi-gear',
    //   link: '/settings',
    //   active: false,
    // }
  ];


}
