import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees 
  displayedColumns: string[] = ['FirstName','LastName','Phone','BirthDate','Office','Tags']
  dataSource = []
  constructor(private api: ApiService,private router: Router) { }

  async ngOnInit() {
    this.employees = await this.api.getEmployees()
    this.dataSource = this.employees
    console.log("employees ",this.employees)
  }

  tags(empId,firstName) {
    this.router.navigate(['/viewEmployeeTags', { employeeId: empId, name: firstName  }]);
    //this.router.navigate([`/viewEmployeeTags?employeeId=${empId}`]);
  }
}
