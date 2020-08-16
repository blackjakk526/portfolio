import React, { Component } from "react";
import "./About.css";

class About extends Component{
    render() {
        var selection = "not"

        if (this.props.menuSelection) {
            selection = "selected";
        }

        return(
            <div id="about" onMouseDown={(e) => this.props.handleMouseDown(e,0)}   className={selection}>
                <img id="image" src="https://img.icons8.com/ios-filled/60/000000/guest-male--v1.png" alt=""/>
                <h5>About Me</h5>
            </div>
        );
    }
}

export default About;