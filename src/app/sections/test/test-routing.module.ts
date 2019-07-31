import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TestComponent } from './test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestRoutingModule { }
