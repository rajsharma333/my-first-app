import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetStudentService {
  students = './students.json';

  getStudents = () => { return this.students }
  
}
