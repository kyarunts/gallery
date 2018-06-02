import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsMainComponent } from './artists-main.component';

describe('ArtistsMainComponent', () => {
  let component: ArtistsMainComponent;
  let fixture: ComponentFixture<ArtistsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
