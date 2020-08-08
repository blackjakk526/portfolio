import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component{
    render() {
        var selection = "not"

        if (this.props.menuSelection) {
            selection = "selected";
        }

        return(
            <div id="resume" onMouseDown={(e) => this.props.handleMouseDown(e, 1)}   className={selection}>
                <img id="image" src="https://img.icons8.com/dotty/80/000000/open-resume.png" alt=""/>
                <p>Resume</p>
            </div>
        );
    }
}

export default Resume;