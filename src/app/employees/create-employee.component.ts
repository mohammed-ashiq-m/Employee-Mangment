import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewofphoto=false;
  gender='male';
  constructor() { }

  tooglepreviewofphoto(){
    this.previewofphoto=!this.previewofphoto
  }
  ngOnInit() {
  }
  saveEmployee(empForm:NgForm):void{
    console.log(empForm.value);
  }

}
