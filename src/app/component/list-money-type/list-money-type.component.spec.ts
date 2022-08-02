import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoneyTypeComponent } from './list-money-type.component';

describe('ListMoneyTypeComponent', () => {
  let component: ListMoneyTypeComponent;
  let fixture: ComponentFixture<ListMoneyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoneyTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMoneyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
