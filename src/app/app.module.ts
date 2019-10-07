import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TrainerlandComponent } from './trainerland/trainerland.component';
import { UserlandComponent } from './userland/userland.component';
import { UserprogressComponent } from './userprogress/userprogress.component';
import {FormsModule} from '@angular/forms';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { SearchComponent } from './search/search.component';
import { UsercompletedComponent } from './usercompleted/usercompleted.component';
import { PaymentComponent } from './payment/payment.component';
import { TrainercurrentComponent } from './trainercurrent/trainercurrent.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { EditskillComponent } from './editskill/editskill.component';
import { AdminComponent } from './admin/admin.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { ProfileComponent } from './profile/profile.component';
import { AlertComponent } from './_directives/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend



import { AlertService, AuthenticationService, UserService } from './_services';
import { TechnologyListComponent } from './technology-list/technology-list.component';
import { TechnologyFormComponent } from './technology-form/technology-form.component';
import { TechnologyService } from './_services/technology.service';
import { TechnologyUpdateComponent } from './technology-update/technology-update.component';
import { TechnologyDeleteComponent } from './technology-delete/technology-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    TrainerlandComponent,
    UserlandComponent,
    UserprogressComponent,
    UsersignupComponent,
    SearchComponent,
    UsercompletedComponent,
    PaymentComponent,
    TrainercurrentComponent,
    TrainercompletedComponent,
    TransactionhistoryComponent,
    EditskillComponent,
    AdminComponent,
    AdmineditComponent,
    ProfileComponent,
    AlertComponent,
    TechnologyListComponent,
    TechnologyFormComponent,
    TechnologyUpdateComponent,
    TechnologyDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    TechnologyService,
    UserService,
     HttpClientModule
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
