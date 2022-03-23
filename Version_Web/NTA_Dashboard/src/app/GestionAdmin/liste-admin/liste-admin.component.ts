import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../Service/admin-service.service';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.scss']
})
export class ListeAdminComponent implements OnInit {
  searchText ='';
  listAdmin:any;
  constructor(
    private admiservice:AdminServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listAdm();
  }
async listAdm(){
  return this.admiservice.listeAdmin().subscribe((data:any)=>{
    console.log(data);
    this.listAdmin = data;
    
  })
}
deleteAdmin(data: any){
  this.admiservice.deleteAdmin(data).subscribe((datas: any)=>{
    window.location.reload();
    this.router.navigateByUrl('/listeadmin', {skipLocationChange: true}).then(()=>
    this.router.navigate(['listeadmin'])); 
  });
 
}
}
