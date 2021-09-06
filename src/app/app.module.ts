import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './Navigation/topnavbar/topnavbar.component';
import { LandingBannerComponent } from './Design/landing-banner/landing-banner.component';
import { MainDesignComponent } from './Design/main-design/main-design.component';
import { AdDesignComponent } from './Design/ad-design/ad-design.component';
import { SideNavbarDesignComponent } from './Design/side-navbar-design/side-navbar-design.component';
import { ResourceDesignComponent } from './Design/resource-design/resource-design.component';
import { AccessibilityComponent } from './Design/all-resource/accessibility/accessibility.component';
import { AnimationComponent } from './Design/all-resource/animation/animation.component';
import { AllDesignResourceComponent } from './Design/all-resource/all-design-resource/all-design-resource.component';
import { BooksDesignComponent } from './Design/all-resource/books-design/books-design.component';
import { ColorDesignComponent } from './Design/all-resource/color-design/color-design.component';
import { ContentDesignComponent } from './Design/all-resource/content-design/content-design.component';
import { InspirationDesignComponent } from './Design/all-resource/inspiration-design/inspiration-design.component';
import { DesignsystemDesignComponent } from './Design/all-resource/designsystem-design/designsystem-design.component';
import { GradientDesignComponent } from './Design/all-resource/gradient-design/gradient-design.component';
import { IconDesignsignComponent } from './Design/all-resource/icon-designsign/icon-designsign.component';
import { IllustrationDesignComponent } from './Design/all-resource/illustration-design/illustration-design.component';
import { MockupDesignComponent } from './Design/all-resource/mockup-design/mockup-design.component';
import { PatternbgDesignComponent } from './Design/all-resource/patternbg-design/patternbg-design.component';
import { ImageDesignComponent } from './Design/all-resource/image-design/image-design.component';
import { VideoDesignComponent } from './Design/all-resource/video-design/video-design.component';
import { TypographyDesignComponent } from './Design/all-resource/typography-design/typography-design.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    LandingBannerComponent,
    MainDesignComponent,
    AdDesignComponent,
    SideNavbarDesignComponent,
    ResourceDesignComponent,
    AccessibilityComponent,
    AnimationComponent,
    AllDesignResourceComponent,
    BooksDesignComponent,
    ColorDesignComponent,
    ContentDesignComponent,
    InspirationDesignComponent,
    DesignsystemDesignComponent,
    GradientDesignComponent,
    IconDesignsignComponent,
    IllustrationDesignComponent,
    MockupDesignComponent,
    PatternbgDesignComponent,
    ImageDesignComponent,
    VideoDesignComponent,
    TypographyDesignComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
