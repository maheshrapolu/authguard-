import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
//import { AuthService } from '../auth.service';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthGuard]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted= false;
  password: string;
  username: string;
  submitted: boolean;
  constructor(private routes: Router,
    private formBuilder: FormBuilder,
    // private auth: AuthService,
    private localSt:LocalStorageService ) { }
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  login() : void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.username = this.loginForm.controls['username'].value;
    this.password = this.loginForm.controls['password'].value;
    if(this.username === 'test' && this.password === 'test'){
      this.routes.navigate(['/home']);
      this.localSt.store('loginDetaisl', this.loginForm.value);
    }else {
      this.routes.navigate(['/login']);
    }
    
    //console.log("login details locatl"+this.localSt.retrieve('loginDetaisl'));
  }
  }


