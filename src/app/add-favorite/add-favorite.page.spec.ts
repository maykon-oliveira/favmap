import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFavoritePage } from './add-favorite.page';

describe('AddFavoritePage', () => {
  let component: AddFavoritePage;
  let fixture: ComponentFixture<AddFavoritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavoritePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
