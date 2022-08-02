import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllDeleteWalletComponent } from './show-all-delete-wallet.component';

describe('ShowAllDeleteWalletComponent', () => {
  let component: ShowAllDeleteWalletComponent;
  let fixture: ComponentFixture<ShowAllDeleteWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllDeleteWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllDeleteWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
