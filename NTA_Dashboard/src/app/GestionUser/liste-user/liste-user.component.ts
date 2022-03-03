import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {
  listuser:any;
searchText =''
  constructor(
    private Userservice: UserServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.listeUsers();
  }

  listeUsers(){
    return this.Userservice.listeUser().subscribe((data:any)=>{
      this.listuser=data;
    })
  }

  deleteUser(data: any){
    this.Userservice.deleteUser(data).subscribe((datas: any)=>{
      window.location.reload();
      this.route.navigateByUrl('/listeuser', {skipLocationChange: true}).then(()=>
      this.route.navigate(['listeuser'])); 
    });
  }
}
