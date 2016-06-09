import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>My home page</h1>
                <p>React, Redux, Router, Responsive</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;