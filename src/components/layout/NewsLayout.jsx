import React from 'react';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Pages/Share/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header>

            </Header>

            <Container className='mt-4'>
                <Row>

                    <Col lg={9}>

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

export default NewsLayout;