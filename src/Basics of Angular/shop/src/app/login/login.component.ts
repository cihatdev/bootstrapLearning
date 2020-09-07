import { User } from 'src/app/login/User';
import { AccountService } from './../services/account.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: User = new User();

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    this.accountService.login(this.model);
  }
}
