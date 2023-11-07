import React, { Component} from "react";

export default class Student extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            college: props.college
        }
    }
    
    render() {
        return (
            
                <h1>Student of {this.props.college} </h1>
            
        )
    }

}