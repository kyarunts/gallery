import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesMainComponent } from './stories-main.component';

describe('StoriesMainComponent', () => {
  let component: StoriesMainComponent;
  let fixture: ComponentFixture<StoriesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
