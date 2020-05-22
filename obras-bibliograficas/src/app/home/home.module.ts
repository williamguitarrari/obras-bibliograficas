import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
