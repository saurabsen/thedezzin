import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDesignComponent } from './Design/main-design/main-design.component';

const routes: Routes = [
  { path: '',   redirectTo: '/design', pathMatch: 'full' },
  { path: 'design', component: MainDesignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
