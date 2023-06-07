import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import './RightNav.css';

const RightNav = () => {
    return (

        <div>
            <h3 className='mb-4'> Login With </h3>
            <Button variant="outline-primary" className='px-3 mb-3'> <FaGoogle /> Login With Google </Button>{' '}
            <Button variant="outline-secondary" className='px-3 mb-3'> <FaGithub /> Login With Github </Button>{' '}

            <h3 className='my-4'> Find Us On </h3>

            <ListGroup>
                <ListGroup.Item className='py-3'> <FaFacebookF />  Facebook </ListGroup.Item>

                <ListGroup.Item className='py-3'> <FaTwitter /> Twitter </ListGroup.Item>

                <ListGroup.Item className='py-3'> <FaInstagram /> Instagram </ListGroup.Item>

            </ListGroup>
            <h3 className='mt-4 mb-3'> Q-Zone </h3>
            <QZone>

            </QZone>

            <div className='right-nav-bg mt-4'>
             <h3 className='py-3'>Create an Amazing Newspaper</h3>
             <p className='py-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
             <Button variant ="danger" className='mt-4'> Learn More </Button>
            </div>
        </div >
    );
};

export default RightNav;