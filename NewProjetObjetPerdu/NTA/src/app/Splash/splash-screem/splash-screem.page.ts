import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screem',
  templateUrl: './splash-screem.page.html',
  styleUrls: ['./splash-screem.page.scss'],
})
export class SplashScreemPage implements OnInit {

  constructor(private router : Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('tabs/tabs/tab1');
    },4000)
  }

  ngOnInit() {
  }

}
