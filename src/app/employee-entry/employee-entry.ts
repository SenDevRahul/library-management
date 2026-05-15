import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee-service';


@Component({
  selector: 'app-employee-entry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-entry.html',
  styleUrls: ['./employee-entry.css'],
})
export class EmployeeEntryComponent {

  errorMessage: string = '';
  successMessage: string = '';

  employee: Employee = {
    id: '',
    name: '',
    fatherName: '',
    salary: 0,
    city: '',
    gender: '',
    contactNumber: '',
    email: ''
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  postEmployee() {

    // Validation
    if (
      !this.employee.name ||
      !this.employee.fatherName ||
      !this.employee.city
    ) {
      this.errorMessage = 'Please fill all required fields';
      this.successMessage = '';
      return;
    }

    this.employeeService.employeeEntry(this.employee).subscribe({

      next: (res) => {

        console.log('Employee Saved', res);

        if (res != null) {

          this.successMessage = 'Employee Added Successfully';
          this.errorMessage = '';

          // Reset form
          this.employee = {
            id: '',
            name: '',
            fatherName: '',
            salary: 0,
            city: '',
            gender: '',
            contactNumber: '',
            email: ''
          };

          setTimeout(() => {
            this.router.navigate(['home/employee-entry']);
          }, 2000);

        } else {

          this.successMessage = '';

          this.errorMessage =
            `Something went wrong for employee ${this.employee.name}`;
        }
      },

      error: (err: any) => {

        console.error('Error', err);

        this.successMessage = '';

        this.errorMessage =
          `Unable to save employee ${this.employee.name}`;
      }

    });
  }
}