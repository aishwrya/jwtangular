import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {SearchService} from '../_services/search.service';
import { Search } from '../_models/search';
import {Training} from '../_models/training';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
 search:Search;
 
 training:Training[];
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router,private searchservice:SearchService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [],
    
      start: [],
      end:[]
  });
  }
  myFunction()
  {
  document.getElementById("myDropdown").classList.toggle("show");
  }
  onSubmit() {
    this.searchservice.passdata(this.registerForm.value["name"],this.registerForm.value["start"],this.registerForm.value["end"]);
    this.router.navigate(['/search']);
  }

  
}
