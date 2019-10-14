import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "./customer";

const httpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class CustomerService {
  private customerUrl = "http://localhost:8080/api/customers"; //link for api
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.get<Customer>(url);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl, customer, httpOptions);
  }

  deleteCustomr(customer: Customer | number): Observable<Customer> {
    const id = typeof customer === "number" ? customer : customer.id;
    const url = `${this.customerUrl}/${id}`;

    return this.http.delete<Customer>(url, httpOptions);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.customerUrl, customer, httpOptions);
  }
}
