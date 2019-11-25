import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.models';

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[]=[
    {
      id:1,
  name:'Ashiq',
  gender:'Male',
  email:'ashiqm@gmail.com',
  department:'BA',
  mobilenumber:8547322997,
  photo:"assets/images/pi.jpeg"
 },
  {
    id:2,
    name:"Hussan",
    gender:'Male',
    email:"hussain@gmail.com",
    department:'jr software',
    mobilenumber:854732567,
    photo:"assets/images/p2.jpeg"
  },
  {
    id:3,
    name:'Jasmin',
    gender:'Female',
    email:"jsmin@gmail.com",
    department:'jr software',
    mobilenumber:794732567,
    photo:"assets/images/p3.jpeg"
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
