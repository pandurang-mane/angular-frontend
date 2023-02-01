import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, 
    private router: Router) {}

  onSubmit() {
    console.log(this.customer)
    this.saveCustomer();
    this.goToCustomerList();
  }

  saveCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(data => {
      console.log(data)
    },
    error => console.log(error));
  }

  goToCustomerList() {
      this.router.navigate(['/customers'])
  }

}
