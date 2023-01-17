import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewBannerComponent } from './my-new-banner.component';

describe('MyNewBannerComponent', () => {
  let component: MyNewBannerComponent;
  let fixture: ComponentFixture<MyNewBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNewBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
