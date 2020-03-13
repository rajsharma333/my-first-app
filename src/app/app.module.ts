import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ReviewComponent } from './review/review.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DiscountPipe } from './discount.pipe';
import { GetStudentService } from './get-student.service';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ViewStudentComponent,
    ReviewComponent,
    StudentListComponent,
    DiscountPipe,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GetStudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
