import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from './Service/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user : any;
  constructor(private service : RegisterServiceService, private route : Router){

  }
  registreForm(userForm:any) {
    console.log(userForm.value);
    this.service.ajoutUser(userForm.value).subscribe((data : any)=>{
      this.user = data;
      this.route.navigateByUrl('tabs/tabs/tab1');
    })
  }
  ngOnInit() {
  }




}
