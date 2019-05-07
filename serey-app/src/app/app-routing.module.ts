import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { HotpostsComponent } from './hotposts/hotposts.component';
import { SnakeComponent } from './snake/snake.component';
import{BetelComponent} from './betel/betel.component';
import { WorldCupComponent} from './world-cup/world-cup.component';
import { AboutComponent} from './about/about.component';
/* const routes: Routes = [{
  path:'login', component:'LoginComponent'
}];
 */
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'hot', component: HotpostsComponent },
  { path: 'snake', component: SnakeComponent },
  {path: 'betel', component: BetelComponent},
  {path: 'squad', component: WorldCupComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing =[LoginComponent,RegistrationComponent, ForgotPasswordComponent,HotpostsComponent,SnakeComponent,BetelComponent,AboutComponent]
