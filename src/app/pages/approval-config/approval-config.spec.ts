import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalConfig } from './approval-config';

describe('ApprovalConfig', () => {
  let component: ApprovalConfig;
  let fixture: ComponentFixture<ApprovalConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalConfig],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovalConfig);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
