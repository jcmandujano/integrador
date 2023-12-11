import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitaPermisoPageRoutingModule } from './solicita-permiso-routing.module';

import { SolicitaPermisoPage } from './solicita-permiso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitaPermisoPageRoutingModule
  ],
  declarations: [SolicitaPermisoPage]
})
export class SolicitaPermisoPageModule {}
