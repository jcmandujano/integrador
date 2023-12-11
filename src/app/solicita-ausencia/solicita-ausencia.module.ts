import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SolicitaAusenciaPageRoutingModule } from './solicita-ausencia-routing.module';

import { SolicitaAusenciaPage } from './solicita-ausencia.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitaAusenciaPageRoutingModule
  ],
  declarations: [SolicitaAusenciaPage]
})
export class SolicitaAusenciaPageModule {}
