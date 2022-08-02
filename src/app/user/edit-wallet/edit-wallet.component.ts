import { Component, OnInit } from '@angular/core';
import {Wallet} from "../../model/wallet";
import {FormControl, FormGroup} from "@angular/forms";
import {WalletService} from "../../service/wallet.service";
import {MoneyTypeService} from "../../service/money-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit-wallet',
  templateUrl: './edit-wallet.component.html',
  styleUrls: ['./edit-wallet.component.css']
})
export class EditWalletComponent implements OnInit {
  wallet: Wallet | any;
  id: any;

  listMoneyType:any = [];
  editForm = new FormGroup({
    name: new FormControl(),
    totalMoney: new FormControl(),
    moneyType: new FormControl(),
  })

  constructor(private walletService : WalletService,
              private moneyTypeService: MoneyTypeService,
              private activatedRoute: ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get("id"); // Lấy id từ URL
      this.findById(this.id)
    })
    this.findAllMoneyType();
  }
  findById(id:any) {
    console.log(id)
    this.walletService.findById(id).subscribe(data => {
      // @ts-ignore
      console.log(data)
      this.editForm.patchValue({
        name: data.name,
        totalMoney: data.totalMoney,
        moneyType: data.moneyType,
      })
    }, error => {
      console.log(error)
    })
  }

  editWallet() {
    this.wallet = {
      name: this.editForm.value.name,
      totalMoney: this.editForm.value.totalMoney,
      moneyType:{
        id: this.editForm.value.moneyType
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
