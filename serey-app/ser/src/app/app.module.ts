import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule ,route} from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendpostComponent } from './trendpost/trendpost.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HotpostsComponent } from './hotposts/hotposts.component';
import { PostComponent } from './post/post.component';
import { NewComponent } from './new/new.component'
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  
} from "angular-6-social-login";






export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
      
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("196010017247-j2ursg1fuh92dsbmgpn5hugk51h8kau8.apps.googleusercontent.com")
        },
          
      ]
  );
  return config;
}








@NgModule({
  declarations: [
    AppComponent,
    TrendpostComponent,route, HeaderComponent, FooterComponent, LoginComponent, RegistrationComponent, HotpostsComponent, PostComponent, NewComponent
  ],
  imports: [
    BrowserModule,SocialLoginModule,
    AppRoutingModule,HttpClientModule,FormsModule

  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
