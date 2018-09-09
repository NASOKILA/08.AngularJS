import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Course } from '../models/course.model';
import * as CourseActions from '../store/actions/course.actions';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  courses: Observable<Course[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.courses = this.store.select('courses');
  }

  delCourse(index) {
    this.store.dispatch(new CourseActions.RemoveCourse(index));
  }

}
