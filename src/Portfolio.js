import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component{
    render() {
        var selection = "not"

        if (this.props.menuSelection) {
            selection = "selected";
        }

        return(
            <div id="portfolio"  onMouseDown={(e) => this.props.handleMouseDown(e,2)}   className={selection}>
                <img id="image" src="https://img.icons8.com/wired/64/000000/moleskine.png" alt=""/>
                <p>Portfolio</p>
            </div>
        );
    }
}

export default Portfolio;