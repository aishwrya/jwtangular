import { Component, OnInit } from '@angular/core';
import { Technology } from '../_models/technology';
import { TechnologyService } from '../_services/technology.service';

@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.component.html',
  styleUrls: ['./technology-list.component.css']
})
export class TechnologyListComponent implements OnInit {
technology:Technology[];
  constructor(private technologyservice:TechnologyService) { }

  ngOnInit() {
    this.technologyservice.findAll().subscribe(data => {
      this.technology = data;
    });
   
  }

}
