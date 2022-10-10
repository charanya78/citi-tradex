import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDashboardComponent } from './volume-dashboard.component';

describe('VolumeDashboardComponent', () => {
  let component: VolumeDashboardComponent;
  let fixture: ComponentFixture<VolumeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
