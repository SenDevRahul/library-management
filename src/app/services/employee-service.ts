import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http:HttpClient){}

  employeeEntry(employee:Employee){
        const url=environment.apiBaseUrl+"/employee/saveEmployee";
        return this.http.post(url,employee);
      }
}

