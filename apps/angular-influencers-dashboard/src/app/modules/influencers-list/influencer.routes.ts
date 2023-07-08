import { Route } from '@angular/router';
import { InfluencerListComponent } from './influencer-list.component';


export const routes: Route[] = [
  {
    path: '',
    component:InfluencerListComponent ,
  },
  {
    path: '**',
    component:InfluencerListComponent ,
  }
];
