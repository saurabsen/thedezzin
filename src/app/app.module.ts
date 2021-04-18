import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './Navigation/topnavbar/topnavbar.component';
import { LandingBannerComponent } from './Design/landing-banner/landing-banner.component';
import { MainDesignComponent } from './Design/main-design/main-design.component';
import { AdDesignComponent } from './Design/ad-design/ad-design.component';
import { SideNavbarDesignComponent } from './Design/side-navbar-design/side-navbar-design.component';
import { ResourceDesignComponent } from './Design/resource-design/resource-design.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    LandingBannerComponent,
    MainDesignComponent,
    AdDesignComponent,
    SideNavbarDesignComponent,
    ResourceDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
