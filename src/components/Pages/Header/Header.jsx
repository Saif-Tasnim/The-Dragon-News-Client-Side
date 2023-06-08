import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    

    return (

        <Container>
            <div className="text-center mt-5">
                <img src={logo} alt="" />
                <p className='mt-3'>Journalism Without Fear or Favour</p>
                <p className='mt-2'> {moment().format("dddd, MMMM D, YYYY")} </p>
            </div>

            <div className='d-flex mt-4 fs-6 mb-2 align-items-center'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    <p> <b>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</b> </p>
                </Marquee>
            </div>

            {/* navbar part  */}


        </Container>
    );
};

export default Header;