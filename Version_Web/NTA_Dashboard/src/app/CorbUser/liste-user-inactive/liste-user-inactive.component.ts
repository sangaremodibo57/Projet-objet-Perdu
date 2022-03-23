import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorbeilleUserServiceService } from '../Service/corbeille-user-service.service';

@Component({
  selector: 'app-liste-user-inactive',
  templateUrl: './liste-user-inactive.component.html',
  styleUrls: ['./liste-user-inactive.component.scss']
})
export class ListeUserInactiveComponent implements OnInit {
  listeUserinactive: any;

  constructor(
    private corbuserservice:CorbeilleUserServiceService,
    private route: Router ) { }

  ngOnInit(): void {
    this.AllUserdesactive();
    
  }
  AllUserdesactive(){
    return this.corbuserservice.getallUserinactive().subscribe((data)=>{
      console.log(data);
      this.listeUserinactive = data;
    })
  }
  ModifieetatinactiveUser(id: any){
   return  this.corbuserservice.ChangeetatUserinactive(id).subscribe((data:any)=>{
    console.log(data);
    this.ngOnInit();
    //this.route.navigateByUrl("/listeuser");
     });
      
      
  
  }

}
