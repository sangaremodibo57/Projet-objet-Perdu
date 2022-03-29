import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorbeilleAdminServiceService } from 'src/app/CorbAdmin/Service/corbeille-admin-service.service';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss']
})
export class CorbeilleComponent implements OnInit {

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
        
    return this.corbadminservice.changeetatadminactive(id).subscribe((data :any) => {

      this.ngOnInit();
    });
     // this.route.navigateByUrl("/listeadmin");
    
  }

}
