export function createCourse(course) {
    return {type: 'CREATE_COURSE', course }
}

// in ES6 course is equivalent to course: course