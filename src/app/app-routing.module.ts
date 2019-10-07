import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserlandComponent } from './userland/userland.component';
import { TrainerlandComponent } from './trainerland/trainerland.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { UserprogressComponent } from './userprogress/userprogress.component';
import { UsercompletedComponent } from './usercompleted/usercompleted.component';
import { PaymentComponent } from './payment/payment.component';
import { EditskillComponent } from './editskill/editskill.component';
import { TrainercurrentComponent } from './trainercurrent/trainercurrent.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
import { AdminComponent } from './admin/admin.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { TechnologyListComponent } from './technology-list/technology-list.component';
import  { TechnologyFormComponent } from './technology-form/technology-form.component';
import {TechnologyUpdateComponent} from './technology-update/technology-update.component';
import {TechnologyDeleteComponent} from './technology-delete/technology-delete.component';
const routes: Routes = [{path:'',component:HomeComponent},{ path: 'login', component: LoginComponent },
{ path:'signup',component:SignupComponent},
{path:'usersignup',component:UsersignupComponent},
{path:'userland',component:UserlandComponent},
{path:'trainerland',component:TrainerlandComponent},
{path:'search',component:SearchComponent},
{path:'profile',component:ProfileComponent},
{path:'userprogress',component:UserprogressComponent},
{path:'usercompleted',component:UsercompletedComponent},
{path:'payment',component:PaymentComponent},
{path:'editskill',component:EditskillComponent},
{path:'trainercurrent',component:TrainercurrentComponent},
{path:'trainercompleted',component:TrainercompletedComponent},
{path:'admin',component:AdminComponent},
{path:'adminedit',component:AdmineditComponent},
{path:'technologylist',component:TechnologyListComponent},
{path:'technologyupdate',component:TechnologyUpdateComponent},
{path:'technologyadd',component:TechnologyFormComponent},
{path:'transactionhistory',component:TransactionhistoryComponent},
{path:'technologydelete',component:TechnologyDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
