import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWalletComponent } from './show-wallet.component';

describe('ShowWalletComponent', () => {
  let component: ShowWalletComponent;
  let fixture: ComponentFixture<ShowWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
