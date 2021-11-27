import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  disabled = false
  officeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl(''),
  })

  constructor(private api: ApiService) { }


  ngOnInit() {
  }
  submit() {
    this.disabled = true
    if (this.officeForm.invalid) {
      return;
    }
    console.log("this.officeForm : ", this.officeForm.value)
    this.api.addOffice(this.officeForm.value)
  }
  actionMethod(event: any) {
    console.log("actionMethod")
    event.target.disabled = true;
}

}
