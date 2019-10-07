import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologyService } from '../_services/technology.service';
import { Technology } from '../_models/technology';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html',
  styleUrls: ['./technology-form.component.css']
})
export class TechnologyFormComponent {
  registerForm: FormGroup;
  technology: Technology;

  constructor(  private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router, private technologyService: TechnologyService) {
    this.technology = new Technology();
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: [],
      
        description: []
    });
}
  onSubmit() {
    this.technologyService.save(this.technology).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/technologylist']);
  }
}