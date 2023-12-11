import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitaAusenciaPage } from './solicita-ausencia.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitaAusenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitaAusenciaPageRoutingModule {}
