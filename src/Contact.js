import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component{
    render() {
        var selection = "not"

        if (this.props.menuSelection) {
            selection = "selected";
        }

        return(
            <div id="contact"  onMouseDown={(e) => this.props.handleMouseDown(e,3)}   className={selection}>
                <img id="image" src="https://img.icons8.com/material/60/000000/business-contact--v1.png" alt=""/>
                <h5>Contact</h5>
            </div>
        );
    }
}

export default Contact;