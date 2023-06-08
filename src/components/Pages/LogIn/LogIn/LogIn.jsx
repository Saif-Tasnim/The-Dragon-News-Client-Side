
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const LogIn = () => {

    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/category/0';


    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(res => {
                const loggedIn = res.user;
                console.log(loggedIn);
                navigate(from , {replace: true});
            })
            .catch(error => {
                console.log(error);
            })

        form.reset();
    }
    return (
        <div className='bg'>

            <div className='mx-auto mt-5 login-card'>
                <h2 className='text-center mb-4 pt-3'>Login Your Account</h2>
                <hr className='mt-5' />
                <Container>
                    <Form className='mt-5' onSubmit={handleLogIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <b>Email address</b> </Form.Label>
                            <Form.Control type="email" placeholder="Enter your email"
                                name="email" className='form-input' required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" className='form-input' required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='mt-4'>
                            Log In
                        </Button>

                    </Form>

                    <Form.Text>
                        <p className='mt-3 fs-6'>
                            <b> <span> New to The Dragon News ? </span>
                                <Link to="/register" className='text-decoration-none'> <span style={{ color: "#FF8C47" }}>Register</span> </Link>
                            </b>
                        </p>
                    </Form.Text>

                </Container>
            </div>

        </div>
    );
};

export default LogIn;