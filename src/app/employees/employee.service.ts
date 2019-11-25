import {Injectable} from '@angular/core';
import {Employee} from '../models/employee.models';

@Injectable()
export class EmployeeService {

  private listEmployees: Employee[]=  [
    {
      id:1,
      name:'Ashiq',
      gender:'Male',
      email:'ashiqm@gmail.com',
      department:'BA',
      mobilenumber:8547322997,
      photopath:"assets/images/pi.jpeg"
    },
    {
      id:2,
      name:"Hussan",
      gender:'Male',
      email:"hussain@gmail.com",
      department:'jr software',
      mobilenumber:854732567,
      photopath:"assets/images/p2.jpeg"
    },
    {
      id:3,
      name:'Jasmin',
      gender:'Female',
      email:"jsmin@gmail.com",
      department:'jr software',
      mobilenumber:794732567,
      photopath:"assets/images/p3.jpeg"
    }
  ];

  getEmployees():Employee[] {
    return this.listEmployees;
  }
  save(employee:Employee){
    this.listEmployees.push(employee);

  }
}
