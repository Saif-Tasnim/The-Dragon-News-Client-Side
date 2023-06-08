import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img1 from '../../assets/editorsInsight1.png';
import img2 from '../../assets/editorsInsight2.png';
import img3 from '../../assets/editorsInsight3.png';
import { FaCalendar } from 'react-icons/fa';

const EdittorsInsight = () => {
    return (
        <CardGroup className='gap-3 mt-3'>
            <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>

                </Card.Body>
                <Card.Footer className='d-flex align-items-center gap-3 mt-3'>
                    <FaCalendar></FaCalendar>
                    <small className="text-muted">  Jan 4 , 2022</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>

                </Card.Body>
                <Card.Footer className='d-flex align-items-center gap-3 mt-3'>
                    <FaCalendar></FaCalendar>
                    <small className="text-muted">  Jan 4 , 2022</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>

                </Card.Body>
                <Card.Footer className='d-flex align-items-center gap-3 mt-3'>
                    <FaCalendar></FaCalendar>
                    <small className="text-muted">  Jan 4 , 2022</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default EdittorsInsight;