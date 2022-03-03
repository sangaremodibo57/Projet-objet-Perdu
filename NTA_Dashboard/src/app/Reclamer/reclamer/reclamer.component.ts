import { Component, OnInit } from '@angular/core';
import { ReclamerServiceService } from '../Service/reclamer-service.service';

@Component({
  selector: 'app-reclamer',
  templateUrl: './reclamer.component.html',
  styleUrls: ['./reclamer.component.scss']
})
export class ReclamerComponent implements OnInit {
  listeReclame: any;

  constructor(private service :ReclamerServiceService) { }

  ngOnInit(): void {
    this.reclamer();
  }

  reclamer(){
    return this.service.afficheReclame().subscribe(data=>{
      this.listeReclame = data;
      console.log(this.listeReclame);
      
    })
  }
}
