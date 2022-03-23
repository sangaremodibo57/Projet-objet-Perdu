import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../Service/admin-service.service';

@Component({
  selector: 'app-details-admin',
  templateUrl: './details-admin.component.html',
  styleUrls: ['./details-admin.component.scss']
})
export class DetailsAdminComponent implements OnInit {
  id:any;
  admin:any;
    constructor(
      private admservice: AdminServiceService,
      private route:ActivatedRoute
      ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.admservice.detailAdmin(this.id).subscribe((data: any)=>{
      this.admin = data;
    })
  }
}
