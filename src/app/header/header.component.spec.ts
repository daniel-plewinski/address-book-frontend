import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <h1> title with "Książka adresowa"', () => {
    const titleElement: HTMLElement = fixture.nativeElement;
    const h1 = titleElement.querySelector('h1');
    expect(h1.textContent).toEqual('Książka adresowa');
  });

  it('should have <button>  with "Start"', () => {
    const buttonElement: DebugElement = fixture.debugElement;
    const buttons = buttonElement.queryAll(By.css('button'))[0];
    const button: HTMLElement = buttons.nativeElement;
    expect(button.textContent).toEqual('Start');
  });

  it('should have <button>  with "Dodaj adres"', () => {
    const buttonElement: DebugElement = fixture.debugElement;
    const buttons = buttonElement.queryAll(By.css('button'))[1];
    const button: HTMLElement = buttons.nativeElement;
    expect(button.textContent).toEqual('Dodaj adres');
  });

});
