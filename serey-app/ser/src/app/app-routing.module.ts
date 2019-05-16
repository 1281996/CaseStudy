import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendpostComponent } from './trendpost/trendpost.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HotpostsComponent } from './hotposts/hotposts.component';
import {PostComponent} from './post/post.component';
const routes: Routes = [{path:"",component:TrendpostComponent},{path:"hot",component:HotpostsComponent},
{path:"login",component:LoginComponent},{path:"register",component:RegistrationComponent},{path:"posts",component:PostComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route=[TrendpostComponent,LoginComponent,RegistrationComponent,PostComponent]