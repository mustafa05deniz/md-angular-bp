import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import 'devextreme/data/odata/store';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies: any;
  dataSource: any;
  constructor(public company_service: CompanyService) {

  }

  ngOnInit(): void {
  }


}
