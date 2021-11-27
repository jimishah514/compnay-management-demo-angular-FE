import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-employee-tag-list',
  templateUrl: './employee-tag-list.component.html',
  styleUrls: ['./employee-tag-list.component.css']
})
export class EmployeeTagListComponent implements OnInit {
  @Input() emp;
  employeeTags
  empName: string;
  edit = false;

  constructor(private api: ApiService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      console.log("params :",params)
      this.empName = params.name
      this.employeeTags = await this.api.getEmployeeTags(params.employeeId)
      });
  }

  toggleEdit() {
    this.edit = !this.edit
  }

  updateTag(tag) {
  }

  saveTag(id,tag) {
    this.api.updateTag({id,tag})
  }

}
