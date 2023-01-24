import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-api-component',
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.scss']
})
export class ApiComponentComponent implements OnInit {
  submitted = false;
  employeeForm!: FormGroup ;
  Employee:any = [];

  name = 'Whats the version : '+ VERSION.full

  constructor(private apiService: ApiService,
    private router: Router,
    private ngZone: NgZone,
    public fb: FormBuilder,) { 
      this.mainForm();
      this.readEmployee();
    }

  ngOnInit(): void {
    console.log('VERSION.major',VERSION)
  }
  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [    
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  get myForm() {
    return this.employeeForm;
  }

  getDate(date:any){
    var nDate=new Date(date)
    return nDate.getDate()+"/"+(nDate.getMonth()+1)+"/"+nDate.getFullYear();
  }

  readEmployee(){
    this.apiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }
  removeEmployee(employee:any, index:any) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((data) => {
          this.Employee.splice(index, 1); 
        }
      )    
    }
  }

  check(){
    
  }

  onSubmit() {
    // console.log('check',this.employeeForm.value)
    // if (!this.employeeForm.valid) {
    //   return false;
    // } else {
      if(this.employeeForm.value.name && this.employeeForm.value.phoneNumber && this.employeeForm.value.email){
        this.apiService.createEmployee(this.employeeForm.value).subscribe({
          complete: () => {
            console.log( 'Employee successfully created!'),
              this.ngZone.run(() => this.router.navigateByUrl('/'));
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
      else{
        window.alert("Fill all fields!")
      }
    // }
  }
}
