import React, {Component} from "react";
import "./Sidebar.css";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

class Sidebar extends Component {
    render() {
        return(
            <div className="sidemenu">
                <img className="profile" src="./Alan_profile1.jpg" alt="Profile"/>
                <h1>Alan Gounley</h1>
                <About id="about" handleMouseDown={(e,value) => this.props.handleMouseDown(e,value)} menuSelection={this.props.selected[0]}></About>
                <Resume id="resume" handleMouseDown={(e,value) => this.props.handleMouseDown(e,value)} menuSelection={this.props.selected[1]}></Resume>
                <Portfolio id="portfolio" handleMouseDown={(e,value) => this.props.handleMouseDown(e,value)} menuSelection={this.props.selected[2]}></Portfolio>
                <Contact id="contact" handleMouseDown={(e,value) => this.props.handleMouseDown(e,value)} menuSelection={this.props.selected[3]}></Contact>
            </div>
        );
    }
}

export default Sidebar;