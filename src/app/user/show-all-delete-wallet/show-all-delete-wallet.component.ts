import { Component, OnInit } from '@angular/core';
import {Wallet} from "../../model/wallet";
import {WalletService} from "../../service/wallet.service";

@Component({
  selector: 'app-show-all-delete-wallet',
  templateUrl: './show-all-delete-wallet.component.html',
  styleUrls: ['./show-all-delete-wallet.component.css']
})
export class ShowAllDeleteWalletComponent implements OnInit {
  wallets: Wallet [] = [];
  avatar = localStorage.getItem('AVATAR');
  username = localStorage.getItem('USERNAME');
  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    this.walletService.findAllByStatusPrivate().subscribe(data => {
      this.wallets = data
    }, error => {
      console.log(error)
    })
  }

}
