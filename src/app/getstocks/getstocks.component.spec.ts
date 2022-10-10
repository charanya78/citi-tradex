import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstocksComponent } from './getstocks.component';

describe('GetstocksComponent', () => {
  let component: GetstocksComponent;
  let fixture: ComponentFixture<GetstocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
