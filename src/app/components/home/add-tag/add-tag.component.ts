import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { isBuffer } from 'util';
@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {
  disabled = false
  tagForm = new FormGroup({
    employeeId: new FormControl('', [Validators.required]),
    tag: new FormControl(''),
  })

  constructor(private api: ApiService) { }
  employees
  employeeId
  async ngOnInit() {
    this.employees = await this.api.getEmployees()
  }
  employeeSelecttion(e) {
    console.log("Event: ",e)
    this.employeeId = e.value
  }
  submit() {
    this.disabled = true
    let tagObj = this.tagForm.value
    tagObj.employeeId = this.employeeId
    console.log("tagObj : ",tagObj)
    this.api.addTag(tagObj)
  }

}
