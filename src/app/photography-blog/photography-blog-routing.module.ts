import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotographyBlogPage } from './photography-blog.page';

const routes: Routes = [
  {
    path: '',
    component: PhotographyBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotographyBlogPageRoutingModule {}
