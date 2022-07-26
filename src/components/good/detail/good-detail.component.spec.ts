import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDetailComponent } from './good-detail.component';

describe('GoodDetailComponent', () => {
  let component: GoodDetailComponent;
  let fixture: ComponentFixture<GoodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
