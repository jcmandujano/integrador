import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitaPermisoPage } from './solicita-permiso.page';

describe('SolicitaPermisoPage', () => {
  let component: SolicitaPermisoPage;
  let fixture: ComponentFixture<SolicitaPermisoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitaPermisoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
