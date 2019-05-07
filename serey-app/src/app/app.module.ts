import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routing} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HotpostsComponent } from './hotposts/hotposts.component';
import { SnakeComponent } from './snake/snake.component';
import { BetelComponent } from './betel/betel.component';
import { WorldCupComponent } from './world-cup/world-cup.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    routing,
    ForgotPasswordComponent,
    HotpostsComponent,
    SnakeComponent,
    BetelComponent,
    WorldCupComponent,
    BitcoinComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
