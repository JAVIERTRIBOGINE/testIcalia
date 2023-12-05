import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationLinksComponent } from './pagination-links.component';

describe('PaginationLinksComponent', () => {
  let component: PaginationLinksComponent;
  let fixture: ComponentFixture<PaginationLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginationLinksComponent],
    });
    fixture = TestBed.createComponent(PaginationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
