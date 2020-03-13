import { Component, HostListener} from '@angular/core';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-first-app';
  addStudentText = "Add";
  viewStudentText = "View";
  updateStudentText = "Update";
  showButton = false;
  clickedButton = "This is *ngIf sample";
  showExample = 4;

  students: AngularStudents[] = [
    {name: "amar", coursePrice: 1000,  proficiency: "good",
    exp: 1},
    {name: "dheeraj", coursePrice: 800, proficiency: "needs improvement"},
    {name: "amit", coursePrice: 1500,  proficiency: "above expectation",
    exp: 1},
    {name: "ravi", coursePrice: 1700,  proficiency: "poor",
    exp: 1}
  ]

  click = (addStudent) => {
    // this.showButton = !this.showButton;
    addStudent.show();
    // this.showExample = !this.showExample;
  }

  onChildClicked = (message:string) => {
    console.log("here is the message: " + message);
  }

}

class AngularStudents {
  name: string;
  coursePrice: number;
  proficiency: string;
  exp?: number;
}

