import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsMainComponent } from './items-main.component';

describe('ItemsMainComponent', () => {
  let component: ItemsMainComponent;
  let fixture: ComponentFixture<ItemsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
