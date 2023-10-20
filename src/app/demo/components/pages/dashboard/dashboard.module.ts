import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		DashboardsRoutingModule,
		ButtonModule,
		ImageModule,
		GalleriaModule,
		CarouselModule
	],
	declarations: [DashboardComponent]
})
export class DashboardModule { }
