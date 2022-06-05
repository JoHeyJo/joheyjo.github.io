import React from "react";
import { ExternalLink } from "react-external-link";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

import "./Nav.css"

// TODO: 

function Nav(){
 return (
    <Navbar className="Nav-navbar  d-none d-md-block" bg="light" expand="lg">
     <Container id="Nav-sidebar">
      <BrowserRouter>
        <HashLink to="/">About</HashLink>
        <a href="https://github.com/JoHeyJo/joheyjo.github.io/blob/main/resume.pdf">Resume</a>
        <HashLink to="/">Contact</HashLink>
        <HashLink to="/">Experience</HashLink>
      </BrowserRouter>
    </Container>
  </Navbar>
 ) 
}


export default Nav