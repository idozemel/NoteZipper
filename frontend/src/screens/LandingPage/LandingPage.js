import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './LandingPage.css';
const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
            <div className='intro-text'>
                <div>
                    <h1 className='title'>Welcome to Note Zipper</h1>
                    <p className='subtitle'>One safe place for all your notes.</p>
                    <div className='buttonContainer'>
                        <Link to='/login'>
                            <Button size="lg" className='landingButton'>Login</Button>
                        </Link>
                        <Link to='/register'>
                            <Button size="lg" className='landingButton' variant='outline-primary'>Singup</Button>
                        </Link>
                    </div>
                </div>
            </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage;