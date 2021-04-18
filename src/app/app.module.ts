import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './Navigation/topnavbar/topnavbar.component';
import { LandingBannerComponent } from './Home/landing-banner/landing-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    LandingBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
