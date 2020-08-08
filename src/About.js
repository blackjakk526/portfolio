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
                <img id="image" src="https://img.icons8.com/wired/64/000000/about.png" alt=""/>
                <p>About</p>
            </div>
        );
    }
}

export default About;