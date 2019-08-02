import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from '../services/api-config.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  public addresses = {};
  public page = 1;
  public search = '';

  constructor(private apiConfigService: ApiConfigService) { }

  ngOnInit() {
    this.getAddresses();
  }

  nextPage($event: Event) {
    $event.preventDefault();
    ++this.page;
    this.getAddresses();
  }

  previousPage($event: Event) {
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
