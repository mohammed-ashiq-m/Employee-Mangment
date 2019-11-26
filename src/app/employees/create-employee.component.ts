import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router';
import {Employee} from '../models/employee.models';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewofphotopath=false;

  employee:Employee={
    id:null,
  name:null,
  gender:'male',
  email:null,
  department:null,
  mobilenumber:null,
    photopath:null
};
  constructor(private _employeeService:EmployeeService,
              private _router: Router) { }

  tooglepreviewofphotopath(){
    this.previewofphotopath=!this.previewofphotopath
  }
  ngOnInit() {
  }
  saveEmployee():void{
   this._employeeService.save(this.employee);
   this._router.navigate(['list']);
  }

}
