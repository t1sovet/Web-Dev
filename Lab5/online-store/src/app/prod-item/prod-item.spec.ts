import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdItem } from './prod-item';

describe('ProdItem', () => {
  let component: ProdItem;
  let fixture: ComponentFixture<ProdItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
