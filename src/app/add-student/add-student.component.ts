import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css', '../app.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private fb:FormBuilder) {    
  }

  @HostBinding ('class.is-show')  
  isShow = false;
  studentForm:FormGroup;
  submitted:boolean = false;
  show = () => {this.isShow = !this.isShow;}

  get f(){return this.studentForm.controls;}

  onSubmit = () => {
    this.submitted = true;
    if(this.studentForm.invalid) {
      return
    }
    console.log(this.studentForm.value);
    this.reset();
  };

  reset() {
    this.submitted = false;
    this.studentForm.reset();
  }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      course: ['', Validators.required],
      courseFee: ['', Validators.required]
    });
  }

}
