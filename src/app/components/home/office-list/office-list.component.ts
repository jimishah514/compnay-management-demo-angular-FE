import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {

  offices 
  displayedColumns: string[] = ['id','name','address']
  dataSource = []
  constructor(private api: ApiService) { }

  async ngOnInit() {
    this.offices = await this.api.getOffices()
    this.dataSource = this.offices
    console.log("offices ",this.offices)
  }

}
