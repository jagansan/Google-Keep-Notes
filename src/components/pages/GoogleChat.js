import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPlus } from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const GoogleChat = () => {
  return (
    <div className='google_keep_notes'>
        <Container>
            <div className='title___keep___notes '>
                <Row className='justify-content-md-center'>
                    <Col md={8}>
                        <div className='google___keep___elements'>
                            <div className='chat___title'>
                                <Form>
                                    <InputGroup className="mb-3">
                                        <Form.Control placeholder="Title" aria-label="Recipient's username" aria-describedby="basic-addon2" className='input__module'/>
                                    </InputGroup>
                                </Form>                            
                            </div>
                            <div className='chat___descr'>
                                <Form>
                                    <InputGroup className="mb-3">
                                        <Form.Control as="textarea" placeholder="Take a Note..." rows={3} className='input__module'/>
                                    </InputGroup>
                                </Form>  
                            </div>
                            <div className='add___note___icon'>
                                <div className='icon___style'><FaPlus /></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default GoogleChat