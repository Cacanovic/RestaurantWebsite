import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageRoutingModule { }
