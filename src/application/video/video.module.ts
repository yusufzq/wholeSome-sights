import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { VideoRoutingModule } from './video-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageComponent } from './manage/manage.component';
import { UpLoadComponent } from './upLoad/upLoad.component';

@NgModule({
	declarations: [
		ManageComponent,
		UpLoadComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		VideoRoutingModule,
		ReactiveFormsModule
	]
})
export class VideoModule {};