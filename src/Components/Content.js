import React from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class Content extends React.Component{
    render(){
        return (
            <div>

            <h1>Hello World</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>

            </div>
        );
    }
}

export default Content;