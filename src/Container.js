import React, { Component } from "react";
import "./Container.css";
import Sidebar from "./Sidebar";
import { Document, Page } from 'react-pdf';
import pdf from './Alan Gounley resume 08-09-2020.pdf'

import { pdfjs } from 'react-pdf';
pdfjs.disableFontFace =  true;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Container extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          selected: [false, false, false, false]
        }
    
        this.handleMouseDown = this.handleMouseDown.bind(this);
      }

      handleMouseDown(e,value) {
        let select = [false, false, false, false];
        var i;

        for(i = 0; i < 4; i++){
            if(value === i){
                select[i] = true;
            }
            else {
                select[i] = false;
            }
        }

         this.setState(
             {
                selected: select
             }
         ); 
         e.stopPropagation();
   }

    render() {
        return(
            <div id="mainpage">
                <Sidebar selected={this.state.selected} handleMouseDown={this.handleMouseDown}></Sidebar>
                <div className={this.state.selected[0].toString()}>
                    <h2>Alan Gounley</h2>
                    <p>Software Engineer/Developer</p>
                </div>
                <div className={this.state.selected[1].toString()}>
                    <Document file={pdf} renderMode="canvas">
                        <Page pageNumber={1} scale="2.0"/>
                    </Document>
                </div>
                <div className={this.state.selected[2].toString()}>
                    <p>Coming Soon</p>
                </div>
                <div className={this.state.selected[3].toString()}>
                    <p>Alan Gounley</p>
                    <p>(717)650-7175</p>
                    <p>agounley@gmail.com</p>
                </div>
            </div>
        );
    }
}

export default Container;