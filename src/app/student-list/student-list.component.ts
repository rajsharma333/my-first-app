import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { GetStudentService } from '../get-student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css', '../add-student/add-student.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private students:GetStudentService) { }

  ngOnInit() {
  }

  @Input() studentList;
  @Output() clicked = new EventEmitter<string>();
  @HostBinding ('class.is-show')

  isShow: boolean = false;
  // childClicked:string = `This is a service ${this.students.getStudents()}`;
  model:any = {};

  onSubmit = () => {
    console.log(this.model);
  };

  show = () => {
    this.isShow = !this.isShow;
  }

  outputClicked = () =>{
    this.clicked.emit("This is an output event emitter");
  }
 
}
