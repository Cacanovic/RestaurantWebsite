import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomepageRoutingModule
  ],
  declarations: [
    HomepageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageModule { }
