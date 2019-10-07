import { Component, OnInit } from '@angular/core';
import {Training} from '../_models/training';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
training:Training[];
  constructor(private searchservice:SearchService) { }

  ngOnInit() {
    this.searchservice.getDetails().subscribe(data=>{this.training=data;});
  }

}
