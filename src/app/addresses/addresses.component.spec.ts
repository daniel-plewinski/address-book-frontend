import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AddressesComponent } from './addresses.component';
import { ApiConfigService } from '../services/api-config.service';

describe('AddressesComponent', () => {
  let component: AddressesComponent;
  let fixture: ComponentFixture<AddressesComponent>;
  let service: ApiConfigService;

  beforeEach(async(() => {

    service = new ApiConfigService(null);
    component = new AddressesComponent(service);

    TestBed.configureTestingModule({
      declarations: [ AddressesComponent ],
      imports: [HttpClientModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a form element', () => {
    const formElement: DebugElement = fixture.debugElement;
    const form = formElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });

});
