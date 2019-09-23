import React from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component{
    render(){
        return (
            <div className="Header">
                <h2>My Header in another component</h2>
            </div>
        );
    }
}

export default Header;