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
                <img className="profile" src="./Alan_profile1.jpg"/>
                <h1>Alan Gounley</h1>
                <About id="about" handleMouseDown={(e,value) => this.props.handleMouseDown(e,value)} menuSelection={this.props.selected[0]}></About>
                <Resume id="resume" handleMouseDown={(e,value) => this.props.handleMouseDown(e,value)} menuSelection={this.props.selected[1]}></Resume>
                <Portfolio id="portfolio" handleMouseDown={(e,value) => this.props.handleMouseDown(e,value)} menuSelection={this.props.selected[2]}></Portfolio>
                <Contact id="contact" handleMouseDown={(e,value) => this.props.handleMouseDown(e,value)} menuSelection={this.props.selected[3]}></Contact>
                <div className="social">
                    <a href="https://www.linkedin.com/in/alan-gounley-1b288856" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.github.com/blackjakk526" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
        );
    }
}

export default Sidebar;