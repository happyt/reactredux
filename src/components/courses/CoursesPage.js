import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context) ;

        this.state = {
            course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
//        console.log(this.state);
//        alert(`Saving ${this.state.course.title}`);
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add course</h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                    />
                 <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                    />   
            </div>
        );
    }
}

// instead of 
// const connStAndPr = connect(mapState, mapDispatch)   returns a function
// export default connStAndPr(CoursesPage)
// can do this

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses          // named as in reducer
    };
}

// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStateToProps)(CoursesPage);  // will add default dispatch property from connect
