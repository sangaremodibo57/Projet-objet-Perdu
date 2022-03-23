import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  user:any;
  id:any;
  constructor(
    private Userservice:UserServiceService,
    private route:ActivatedRoute 
    
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Userservice.detailUser(this.id).subscribe((data: any)=>{
    this.user = data;
  })
}
 
  

}
