import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [acc, setAcc] = useState(false);

    const handleTerms = event => {
        setAcc(event.target.checked);
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.userName.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                const createdUser = res.user;
                console.log(createdUser);
            })
            .catch(err => {
                console.log(err);
            })
        form.reset();

    }

    return (
        <div className='bg'>

            <div className='mx-auto mt-5 login-card mb-5'>
                <h2 className='text-center mb-4 pt-3'> Register Here </h2>
                <hr className='mt-5' />
                <Container>
                    <Form className='mt-5' onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <b>Your Name</b> </Form.Label>
                            <Form.Control type="text" placeholder="Enter your name"
                                name="userName" className='form-input' required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <b>Photo Url</b> </Form.Label>
                            <Form.Control type="text" placeholder="Enter your photo url"
                                name="photo" className='form-input' required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <b>Email address</b> </Form.Label>
                            <Form.Control type="email" placeholder="Enter your email"
                                name="email" className='form-input' required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" className='form-input' required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox"
                                onClick={handleTerms}
                                label={<>Accept <Link to="/terms"> Terms And Conditions </Link></>}

                                name="accept" required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='mt-3' disabled={!acc}>
                            Submit
                        </Button>

                    </Form>

                    <Form.Text>
                        <p className='mt-3 fs-6'>
                            <b><span> Already Have an account ? </span>
                                <Link to="/login" className='text-decoration-none'> <span style={{ color: "#FF8C47" }}>Log In</span> </Link></b>
                        </p>
                    </Form.Text>

                </Container>
            </div>

        </div>
    );
};

export default Register;