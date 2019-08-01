import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from '../services/api-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public addresses = {};
  public page = 1;
  public lastPage: number;
  public search = '';

  constructor(private apiConfigService: ApiConfigService) { }

  ngOnInit() {
    this.getAddresses();
  }

  nextPage($event) {
    $event.preventDefault();
    ++this.page;
    this.getAddresses();
  }

  previousPage($event) {
    $event.preventDefault();
    --this.page;
    this.getAddresses();
  }

  searchAddress() {
    this.page = 1;
    this.getAddresses();
  }

  clearSearch() {
    if (!this.search) {
      this.getAddresses();
    }
  }

  getAddresses() {
    this.apiConfigService.getAddresses(this.page, this.search).subscribe(
      data => {
        this.addresses = data;
      },
      error => { }
    );
  }
}
