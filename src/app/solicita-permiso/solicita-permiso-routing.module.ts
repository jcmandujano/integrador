import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitaPermisoPage } from './solicita-permiso.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitaPermisoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitaPermisoPageRoutingModule {}
