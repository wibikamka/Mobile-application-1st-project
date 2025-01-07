import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesananSayaPage } from './pesanan-saya.page';

describe('PesananSayaPage', () => {
  let component: PesananSayaPage;
  let fixture: ComponentFixture<PesananSayaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PesananSayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
