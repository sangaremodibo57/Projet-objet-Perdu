import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorbeilleAdminServiceService } from '../Service/corbeille-admin-service.service';

@Component({
  selector: 'app-liste-admin-inactive',
  templateUrl: './liste-admin-inactive.component.html',
  styleUrls: ['./liste-admin-inactive.component.scss']
})
export class ListeAdminInactiveComponent implements OnInit {
  listeAdmininactive: any;

  constructor(
    private   corbadminservice:CorbeilleAdminServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
   this.Alladmininactive();
    
  }
  Alladmininactive(){
    return this.corbadminservice.getalladmininactive().subscribe((data:any)=>{
      console.log(data);
      this.listeAdmininactive = data;
      
    })
  }

  Modifieetatinactiveadmin(id:any){
        
    return this.corbadminservice.changeetatadminactive(id).subscribe((data: any) => {
        this.ngOnInit();
    } );
     

    
  }

}
