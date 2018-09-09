import { Course } from '../../models/course.model';
import * as CourseActions from '../actions/course.actions';

const initialState: Course = {
  name: 'Angular Fundamentals July 2018',
  url: 'https://softuni.bg/trainings/2037/angular-fundamentals-july-2018'
}

function removeTutorial(state, action: CourseActions.RemoveCourse) {
  const itemToRemove = state[action.payload];
  return [...state.filter(a => a !== itemToRemove)];
}

export function reducer(
  state: Course[] = [initialState],
  action: CourseActions.Actions) {

  switch (action.type) {
    case CourseActions.ADD_COURSE:

      return [...state, action.payload];
    case CourseActions.REMOVE_COURSE:

      return removeTutorial(state, action as CourseActions.RemoveCourse);
    default:
      return state;
  }
}
