import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';
import { AccessibilityComponent } from './Design/all-resource/accessibility/accessibility.component';
import { AllDesignResourceComponent } from './Design/all-resource/all-design-resource/all-design-resource.component';
import { AnimationComponent } from './Design/all-resource/animation/animation.component';
import { BooksDesignComponent } from './Design/all-resource/books-design/books-design.component';
import { ColorDesignComponent } from './Design/all-resource/color-design/color-design.component';
import { ContentDesignComponent } from './Design/all-resource/content-design/content-design.component';
import { DesignsystemDesignComponent } from './Design/all-resource/designsystem-design/designsystem-design.component';
import { GradientDesignComponent } from './Design/all-resource/gradient-design/gradient-design.component';
import { IconDesignsignComponent } from './Design/all-resource/icon-designsign/icon-designsign.component';
import { IllustrationDesignComponent } from './Design/all-resource/illustration-design/illustration-design.component';
import { ImageDesignComponent } from './Design/all-resource/image-design/image-design.component';
import { InspirationDesignComponent } from './Design/all-resource/inspiration-design/inspiration-design.component';
import { MockupDesignComponent } from './Design/all-resource/mockup-design/mockup-design.component';
import { PatternbgDesignComponent } from './Design/all-resource/patternbg-design/patternbg-design.component';
import { TypographyDesignComponent } from './Design/all-resource/typography-design/typography-design.component';
import { VideoDesignComponent } from './Design/all-resource/video-design/video-design.component';
import { MainDesignComponent } from './Design/main-design/main-design.component';

const routes: Routes = [
  { path: '',   redirectTo: '/design/all-resource', pathMatch: 'full' },
  { path: 'design', component: MainDesignComponent,
  children: [
    { path: 'all-resource', component: AllDesignResourceComponent, },
    { path: 'accessibility', component: AccessibilityComponent, },
    { path: 'animation', component: AnimationComponent, },
    { path: 'books', component: BooksDesignComponent, },
    { path: 'color', component: ColorDesignComponent, },
    { path: 'content', component: ContentDesignComponent, },
    { path: 'design-system', component: DesignsystemDesignComponent, },
    { path: 'gradient', component: GradientDesignComponent, },
    { path: 'icon', component: IconDesignsignComponent, },
    { path: 'illustration', component: IllustrationDesignComponent, },
    { path: 'inspiration', component: InspirationDesignComponent, },
    { path: 'mockup', component: MockupDesignComponent, },
    { path: 'pattern-and-abstract', component: PatternbgDesignComponent, },
    { path: 'stock-image', component: ImageDesignComponent, },
    { path: 'stock-video', component: VideoDesignComponent, },
    { path: 'typography', component: TypographyDesignComponent, },
  ]
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'community', component: CommunityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
