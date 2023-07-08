import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerListComponent } from './influencer-list.component';

describe('CoursesListComponent', () => {
  let component: InfluencerListComponent;
  let fixture: ComponentFixture<InfluencerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfluencerListComponent]
    });
    fixture = TestBed.createComponent(InfluencerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
