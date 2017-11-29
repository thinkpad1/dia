import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DiaRoutingModule } from './dia-routing.module';
import { DiaComponent } from './dia.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    DiaRoutingModule
  ],
  declarations: [
    DiaComponent
  ]
})
export class DiaModule { }
