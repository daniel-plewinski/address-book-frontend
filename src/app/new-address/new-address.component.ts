import { Component, OnInit } from '@angular/core';
import { Address } from '../model/Address';
import { ApiConfigService } from '../services/api-config.service';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent implements OnInit {

  address = new Address('', '');
  showSuccess = false;

  constructor(private apiConfigService: ApiConfigService) { }

  ngOnInit() { }

  newAddress() {

    this.apiConfigService.newAddress(this.address).subscribe(
      data => {
        this.showSuccess = true;
        this.address.surname = "";
        this.address.phone = "";
      },
      error => { 
        console.log(error.error.message);
      }
    );
  }
}
