import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorDashboardComponent } from './sector-dashboard.component';

describe('SectorDashboardComponent', () => {
  let component: SectorDashboardComponent;
  let fixture: ComponentFixture<SectorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
