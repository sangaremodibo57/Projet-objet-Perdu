import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formtest = FormGroup;
  ionicForm: FormGroup;
  constructor(public formBuilder: FormBuilder){

  }
  registreForm() {
    console.log(this.formtest);
  }
  ngOnInit() {
  }



}
