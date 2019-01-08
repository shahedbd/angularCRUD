import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  // uri = 'http://localhost:4000/business';
  uri = 'http://localhost:82/api/BusinessInfoes';
  uri2 = 'http://localhost:7654/api/BusinessInfoes';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/SaveBusinessInfo`, obj)
      .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
      .http
      .get(`${this.uri}/GetBusinessInfo`);
  }

  editBusiness(id) {
    return this
      .http
      .get(`${this.uri}/GetBusinessInfo/${id}`);
  }

  updateBusiness(person_name, business_name, business_gst_number, id) {

    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    this
      .http
      .post(`${this.uri2}/PutBusinessInfo/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteBusiness(id) {
    return this
      .http
      .get(`${this.uri}/DeleteBusinessInfo/${id}`);
  }
}

