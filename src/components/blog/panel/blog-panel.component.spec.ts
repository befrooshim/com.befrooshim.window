import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPanelComponent } from './blog-panel.component';

describe('BlogPanelComponent', () => {
  let component: BlogPanelComponent;
  let fixture: ComponentFixture<BlogPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
