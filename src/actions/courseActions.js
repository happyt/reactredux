export function createCourse(course) {
//    debugger;
    return {type: 'CREATE_COURSE', course };
}

// in ES6 {course} is equivalent to {course: course}