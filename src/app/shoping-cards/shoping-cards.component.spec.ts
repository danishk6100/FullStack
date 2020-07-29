import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCardsComponent } from './shoping-cards.component';

describe('ShopingCardsComponent', () => {
  let component: ShopingCardsComponent;
  let fixture: ComponentFixture<ShopingCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
