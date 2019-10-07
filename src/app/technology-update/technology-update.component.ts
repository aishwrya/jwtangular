import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologyService } from '../_services/technology.service';
import { Technology } from '../_models/technology';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-technology-update',
  templateUrl: './technology-update.component.html',
  styleUrls: ['./technology-update.component.css']
})
export class TechnologyUpdateComponent implements OnInit {

  registerForm: FormGroup;
  technology: Technology;

  constructor(  private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router, private technologyService: TechnologyService) {
    this.technology = new Technology;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: [],
      id:[],
        description: []
    });
}
  onSubmit() {
    this.technologyService.update(this.technology).subscribe(result => {
      console.log(result);
      if(result!==null) this.router.navigate(['/technologylist']);
    }
      );
  }

  gotoUserList() {
    
  }

}
