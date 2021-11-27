import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiDomain = 'http://localhost:3000';

  helloWorld() {
    debugger
    try {
      return this.http.get(`${this.apiDomain}/`).toPromise();
    } catch {
      throw Error;
    }
  }

  addEmployee(emp) {
    try {
      return this.http.post(`${this.apiDomain}/employee`,emp).toPromise();
    } catch {
      throw Error;
    }
  }

  addOffice(office) {
    try {
      return this.http.post(`${this.apiDomain}/office`,office).toPromise();
    } catch {
      throw Error;
    }
  }

  addTag(tag) {
    try {
      return this.http.post(`${this.apiDomain}/tag`,tag).toPromise();
    } catch {
      throw Error;
    }
  }

  getEmployees() {
    try {
      return this.http.get(`${this.apiDomain}/employees`).toPromise();
    } catch {
      throw Error;
    }
  }

  getOffices() {
    try {
      return this.http.get(`${this.apiDomain}/offices`).toPromise();
    } catch {
      throw Error;
    }
  }

  getEmployeeTags(empId) {
    try {
      return this.http.get(`${this.apiDomain}/employeetags?employeeId=${empId}`).toPromise();
    } catch {
      throw Error;
    }
  }

  getOfficeById(id) {
    try {
      return this.http.get(`${this.apiDomain}/offices/${id}`).toPromise();
    } catch {
      throw Error;
    }
  }

  updateTag({id,tag}) {
    try {
      return this.http.patch(`${this.apiDomain}/tag`,{id,tag}).toPromise();
    } catch {
      throw Error;
    }
  }
}
