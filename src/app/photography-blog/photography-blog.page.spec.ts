import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotographyBlogPage } from './photography-blog.page';

describe('PhotographyBlogPage', () => {
  let component: PhotographyBlogPage;
  let fixture: ComponentFixture<PhotographyBlogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
