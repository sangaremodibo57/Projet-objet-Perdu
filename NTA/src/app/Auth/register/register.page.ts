import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  todo = {
    title: '',
    description: ''
  };
  logForm(form) {
    console.log(form.value)
  }
  ngOnInit() {
  }

}
