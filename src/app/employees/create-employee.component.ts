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
  previewofphoto=false;
  gender='male';
  employee:Employee={
    id:null,
  name:null,
  gender:null,
  email:null,
  department:null,
  mobilenumber:null,
    photopath:null
};
  constructor(private _employeeService:EmployeeService,
              private _router: Router) { }

  tooglepreviewofphoto(){
    this.previewofphoto=!this.previewofphoto
  }
  ngOnInit() {
  }
  saveEmployee():void{
   this._employeeService.save(this.employee);
   this._router.navigate(['list']);
  }

}
