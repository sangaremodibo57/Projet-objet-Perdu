import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
id:any;
user:any;
  constructor(
    private Userservice:UserServiceService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Userservice.detailUser(this.id).subscribe((data: any)=>{
    this.user = data;
    console.log(data.value);
    
  })
  }
  updateUser(){
    return this.Userservice.updateUser(this.id, this.user).subscribe((data)=>{
      return this.router.navigateByUrl('listeuser');
      
      
    })
  }

}
