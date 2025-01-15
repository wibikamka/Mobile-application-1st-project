import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailexplorPage } from './detailexplor.page';

describe('DetailexplorPage', () => {
  let component: DetailexplorPage;
  let fixture: ComponentFixture<DetailexplorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailexplorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
