import React from 'react';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Share/LeftNav';
import RightNav from '../Pages/Share/RightNav';
import {Outlet} from 'react-router-dom';
import NavigationBar from '../Pages/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header>

            </Header>

            <NavigationBar>
                
            </NavigationBar>

            <Container>
                <Row>
                    <Col lg={3}> 
                    <LeftNav></LeftNav>
                    </Col>
                    
                    <Col lg={6}>
                    
                       <Outlet></Outlet>
                    
                    </Col>

                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
              
            </Container>

            <Footer>

            </Footer>
        </div>
    );
};

export default Main;