import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {EmployesApiService} from '../employe-api.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  EmployesList$!: Observable<any[]>;

  constructor(private service: EmployesApiService) { }

  ngOnInit() {
    this.EmployesList$ = this.service.getEmployesList();

  }

}
