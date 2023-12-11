import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitaAusenciaPage } from './solicita-ausencia.page';

describe('SolicitaAusenciaPage', () => {
  let component: SolicitaAusenciaPage;
  let fixture: ComponentFixture<SolicitaAusenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitaAusenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
