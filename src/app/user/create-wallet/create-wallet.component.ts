import { Component, OnInit } from '@angular/core';
import {Wallet} from "../../model/wallet";
import {FormControl, FormGroup} from "@angular/forms";
import {WalletService} from "../../service/wallet.service";
import {Router} from "@angular/router";
import {MoneyTypeService} from "../../service/money-type.service";

@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.css']
})
export class CreateWalletComponent implements OnInit {
  wallet: Wallet | any;
  listMoneyType:any = [];
  addForm = new FormGroup({
    name: new FormControl(),
    totalMoney: new FormControl(),
    moneyType: new FormControl(),
  })

  constructor(private walletService : WalletService,
              private moneyTypeService: MoneyTypeService,
              private router : Router) { }

  ngOnInit(): void {
    this.findAllMoneyType();
  }

  addWallet() {
    this.wallet = {
      name: this.addForm.value.name,
      totalMoney: this.addForm.value.totalMoney,
      moneyType:{
        id: this.addForm.value.moneyType
    },
      user:{
        id: localStorage.getItem('ID'),
      },
    }
    console.log(this.wallet)
    this.walletService.save(this.wallet).subscribe(() => {
      alert("ok")
      this.router.navigateByUrl("/user")
    }, error => {
      console.log(error)
    })
  }
  findAllMoneyType(){
    this.moneyTypeService.showAll().subscribe((data)=>{
      console.log(data);
      this.listMoneyType = data;
    })
  }
}
