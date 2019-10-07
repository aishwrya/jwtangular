import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../_services/technology.service';
import {Technology} from '../_models/technology';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {NgZone} from '@angular/core';
@Component({
  selector: 'app-technology-delete',
  templateUrl: './technology-delete.component.html',
  styleUrls: ['./technology-delete.component.css']
})
export class TechnologyDeleteComponent implements OnInit {
technology:Technology[];
  ngZone: any;
  

  constructor(private technologyservice:TechnologyService,private zone:NgZone,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
 this.technologyservice.findAll().subscribe(data=>{this.technology=data});
  }
  delete(id:string)
  {
  this.technologyservice.delete(id).subscribe( res=>{
    console.log(res)
    this.gotolist()});
  alert("Deleted successfully");
  
  
  }
gotolist(){
  console.log("navigation enters");
  this.technologyservice.findAll().subscribe(data=>{this.technology=data});
}
}
