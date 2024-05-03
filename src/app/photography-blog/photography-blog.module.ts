import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotographyBlogPageRoutingModule } from './photography-blog-routing.module';

import { PhotographyBlogPage } from './photography-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotographyBlogPageRoutingModule
  ],
  declarations: [PhotographyBlogPage]
})
export class PhotographyBlogPageModule {}
