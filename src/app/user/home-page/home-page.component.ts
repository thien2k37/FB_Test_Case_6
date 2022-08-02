import { Component, OnInit } from '@angular/core';
import {Wallet} from "../../model/wallet";
import {WalletService} from "../../service/wallet.service";
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  wallets: Wallet[] = [];
  avatar = localStorage.getItem('AVATAR');
  username = localStorage.getItem('USERNAME');
  constructor(private wallet : WalletService,
              private authenticationService: AuthenticationService,
              private router : Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.wallet.findAllByStatusPublic().subscribe(data => {
      this.wallets = data
    }, error => {
      console.log(error)
    })
  }
  delete(id: any) {
    this.wallet.delete(id).subscribe(()=>{
      alert("ok");
      this.getAll();
    },error => {
      console.log(error);
    })
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
    this.ngOnInit();
  }
}
