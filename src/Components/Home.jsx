import React, {Component} from 'react';
import {Grid, Row, Col, Image, Nav, NavItem} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Home.css';
import {goToTop, removeHash} from 'react-scrollable-anchor' /*scrollable anchor also has predefined functions, find the documentation link at App.jsx*/


class Home extends Component {
    componentWillMount() {
        /*removes the hash on load or reload*/
        removeHash();
        /*starts from the top on load or reload*/
         goToTop();
    }

    render() {
        return (
            <Grid>
                {/*contains the logo and text for the head*/}
                <Row className="show-grid text-center Heading">
                    <Col md={3} xs={0}/>
                    <Col className="Head-wrap-1" md={2} xs={4}>
                        <h1 className="Head-1">HOLISTIC</h1>
                    </Col>
                    <Col className="Logo-wrapper" md={2} xs={4}>
                        <Image src="/assests/Main_Logo.png" circle className="logo"/>
                    </Col>
                    <Col className="Head-wrap-2" md={2} xs={4}>
                        <h1 className="Head-2">BODIES</h1>
                    </Col>
                    <Col md={3} xs={0}/>
                </Row>
                {/*uses the Nav tag and creates a fixed position nav bar under the logo*/}
                <Row className="show-grid text-center Menu-row">
                    <Col md={2}/>
                    <Col md={8} className="Menu-items">
                        <Nav bsStyle="pills" justified className="Items">
                            <NavItem eventKey={1} className="nav-link" href="#Home">Home</NavItem>
                            <NavItem eventKey={2} className="nav-link" href="#About">About</NavItem>
                            <NavItem eventKey={3} className="nav-link" href="#Videos">Videos</NavItem>
                            <NavItem eventKey={4} className="nav-link" href="#Merchandise">Merchandise</NavItem>
                            <NavItem eventKey={5} className="nav-link" href="#Training">Training</NavItem>
                            <NavItem eventKey={6} className="nav-link" href="#Subscribe">Subscribe</NavItem>
                            <NavItem eventKey={7} className="nav-link" href="#Footer">Contact</NavItem>
                            <NavItem eventKey={8} className="nav-link"  href="https://10to8.com/book/885ff967-6dca-4509-abde-35106ca9cf02/uuid/">Consultation</NavItem>
                        </Nav>
                        <Col md={2}/>
                    </Col>
                </Row>
                <hr/>
            </Grid>
        );
    }
}

export default Home;
