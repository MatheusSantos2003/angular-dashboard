import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';



@Component({
  selector: 'angular-dashboard-list',
  standalone: true,
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.scss'],
  imports: [CommonModule,LayoutComponent]
})
export class InfluencerListComponent {




}
