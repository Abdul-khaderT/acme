import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { CarouselModule } from 'primeng/carousel';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    CarouselModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
