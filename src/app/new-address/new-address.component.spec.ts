import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NewAddressComponent } from './new-address.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

describe('NewAddressComponent', () => {
  let component: NewAddressComponent;
  let fixture: ComponentFixture<NewAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAddressComponent ],
      imports: [ 
        FormsModule,
        NgbModule,
        HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
