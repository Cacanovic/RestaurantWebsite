import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TestRoutingModule
  ],
  declarations: [
    TestComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestModule { }
