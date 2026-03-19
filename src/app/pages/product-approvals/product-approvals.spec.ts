import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductApprovals } from './product-approvals';

describe('ProductApprovals', () => {
  let component: ProductApprovals;
  let fixture: ComponentFixture<ProductApprovals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductApprovals],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductApprovals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
