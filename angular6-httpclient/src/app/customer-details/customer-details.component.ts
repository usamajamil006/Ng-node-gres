import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.css"]
})
export class CustomerDetailsComponent implements OnInit {
  customer = new Customer();
  submitted = false;
  message: string;
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id"); // + is use to convert string to number
    this.customerService
      .getCustomer(id)
      .subscribe(customer => (this.customer = customer));
  }

  update(): void {
    this.submitted = true;
    this.customerService
      .updateCustomer(this.customer)
      .subscribe(() => (this.message = "Customer Updated Successfully..."));
  }

  delete(): void {
    this.submitted = true;
    this.customerService
      .deleteCustomr(this.customer)
      .subscribe(() => (this.message = "Customer Deleted Successfully..."));
  }

  goBack(): void {
    this.location.back();
  }
}
