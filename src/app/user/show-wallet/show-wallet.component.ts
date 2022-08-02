import { Component, OnInit } from '@angular/core';
import {Wallet} from "../../model/wallet";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {WalletService} from "../../service/wallet.service";

@Component({
  selector: 'app-show-wallet',
  templateUrl: './show-wallet.component.html',
  styleUrls: ['./show-wallet.component.css']
})
export class ShowWalletComponent implements OnInit {
  wallet: Wallet | any;
  id: any;

  constructor(private walletService : WalletService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get("id"); // Lấy id từ URL
      this.findById(this.id)
    })
  }
  findById(id:any) {
    console.log(id)
    this.walletService.findById(id).subscribe(data => {
      // @ts-ignore
      console.log(data)
      this.wallet = data;
    }, error => {
      console.log(error)
    })
  }

}
