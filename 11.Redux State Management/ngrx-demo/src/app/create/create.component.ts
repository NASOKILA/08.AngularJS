import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as CourseActions from '../store/actions/course.actions';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addCourse(name: string, url: string) {
    this.store.dispatch(new CourseActions.AddCourse({ name: name, url: url }));
  }

  ngOnInit() {
  }

}
