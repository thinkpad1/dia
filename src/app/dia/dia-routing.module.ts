import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '../core/i18n.service';
import { DiaComponent } from './dia.component';

const routes: Routes = [
  { path: 'dia', component: DiaComponent, data: { title: extract('DIA') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DiaRoutingModule { }
