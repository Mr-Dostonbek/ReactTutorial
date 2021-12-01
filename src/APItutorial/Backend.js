import React from 'react';
import { Card, Row, CardHeader, Col, Container, CardBody } from 'reactstrap';

class Backend extends React.Component {

    state = {
        user: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.setState({ user: data })
            })
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        {
                            this.state.user.map((users) => {
                                <Col md="4">
                                    <Card key={users.id}>
                                        <CardHeader>
                                            <h2>
                                                {users.name}
                                            </h2>
                                        </CardHeader>
                                        <CardBody>
                                            <h3>
                                                {users.username}
                                            </h3>
                                        </CardBody>
                                    </Card>
                                </Col>
                            })
                        }
                    </Row>
                </Container>
            </>
        );
    }
}

export default Backend;
