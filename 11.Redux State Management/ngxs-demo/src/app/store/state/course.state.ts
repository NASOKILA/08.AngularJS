import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Course } from '../../models/course.model';
import { AddCourse, RemoveCourse } from '../actions/course.actions';

export class CourseStateModel {
    courses: Course[];
}

@State<CourseStateModel>({
    name: 'courses',
    defaults: {
        courses: []
    }
})
export class CourseState {
    @Selector()
    static getCourses(state: CourseStateModel) {
        return state.courses
    }

    @Action(AddCourse)
    add({ getState, patchState }: StateContext<CourseStateModel>,
        { payload }: AddCourse) {
        const state = getState();
        patchState({
            courses: [...state.courses, payload]
        })
    }

    @Action(RemoveCourse)
    remove({ getState, patchState }: StateContext<CourseStateModel>, { payload }
        : RemoveCourse) {
        patchState({
            courses: getState().courses.filter(a => a.name != payload)
        })
    }

}