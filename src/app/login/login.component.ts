import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../_services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username = ''
  password = ''
  invalidLogin = false

    loading = false;
    submitted = false;
    returnUrl: string;
  constructor( private formBuilder: FormBuilder,private router: Router,
    private loginservice: AuthenticationService,private alertService: AlertService) { }

  ngOnInit() {
this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
  }

  onSubmit() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
       
        console.log(this.username);
        console.log(this.password);
   
        this.router.navigate(['/userland']);
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.alertService.error(error);
        this.loading = false;
      }
    )
    );

  }

}
