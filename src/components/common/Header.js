import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeCLassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeCLassName="active">About</Link>
        </nav>
    );
};

export default Header;