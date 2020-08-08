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
                <img id="image" src="https://img.icons8.com/wired/64/000000/business-contact.png" alt=""/>
                <p>Contact</p>
            </div>
        );
    }
}

export default Contact;