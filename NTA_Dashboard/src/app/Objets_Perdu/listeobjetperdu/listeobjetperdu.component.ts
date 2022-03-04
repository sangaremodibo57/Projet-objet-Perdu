import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetperduserviceService } from '../Service/objetperduservice.service';
import {Ng2SearchPipe} from 'ng2-search-filter';
@Component({
  selector: 'app-listeobjetperdu',
  templateUrl: './listeobjetperdu.component.html',
  styleUrls: ['./listeobjetperdu.component.scss']
})
export class ListeobjetperduComponent implements OnInit {
  public listeAnnoncesPerdu : any = [];
  p: number = 1;
  pageOfItems: Array<any> | undefined;
  constructor( private service :ObjetperduserviceService,private route : Router) {}

  ngOnInit(): void {
    this.getAnnonce();
      
      
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

getAnnonce(){
  return this.service.getAllAnnoncePerdu().subscribe((data:any)=>{
   this.listeAnnoncesPerdu = data;
    
  })
}
  suppAnnonce(data:any){
    this.service.deleteAnnonce(data).subscribe(data=>{
      window.location.reload();
      this.route.navigateByUrl('/listeobjetperdu', {skipLocationChange: true}).then(()=>
      this.route.navigate(['listeobjetperdu']));
    })
  }
  
}
