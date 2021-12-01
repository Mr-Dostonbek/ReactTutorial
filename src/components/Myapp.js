import React from "react";
import { Alert, Col, Container, Row } from 'reactstrap';

class Myapp extends React.Component {
    render() {
        return (
            <>
                <h1 className="firstText">Hello React</h1>
                <p>Lorem, Ipsum</p>

                <Container>
                    <Row>
                        <Col sm="4" md="3">
                            <Alert color="danger">
                                Hello World
                            </Alert>
                        </Col>
                        <Col sm="4" md="3">
                            <Alert color="danger">
                                Hello World
                            </Alert>
                        </Col>
                        <Col sm="4" md="3">
                            <Alert color="danger">
                                Hello World
                            </Alert>
                        </Col>
                        <Col sm="4" md="3">
                            <Alert color="danger">
                                Hello World
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Myapp;