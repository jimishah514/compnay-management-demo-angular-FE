import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  disabled = false
  empForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    officeId: new FormControl('', [Validators.required]),
  })

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  submit() {
    this.disabled = true
    // stop here if form is invalid
    if (this.empForm.invalid) {
      return;
    }
    console.log("this.registerForm : ", this.empForm.value)
    this.api.addEmployee(this.empForm.value)
  }

}
