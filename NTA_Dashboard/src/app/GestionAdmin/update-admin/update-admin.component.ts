import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../Service/admin-service.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit {
id:any;
admin:any;
  constructor(
    private Adminservice:AdminServiceService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Adminservice.detailAdmin(this.id).subscribe((data: any)=>{
      this.admin = data;
    })
  }

  updateAdmin(){
    this.Adminservice.updateAdmin(this.id, this.admin).subscribe((data: any)=>{
      this.router.navigate(['listeadmin']);
    })
  }

}
