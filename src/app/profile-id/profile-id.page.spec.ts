import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileIdPage } from './profile-id.page';

describe('ProfileIdPage', () => {
  let component: ProfileIdPage;
  let fixture: ComponentFixture<ProfileIdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
