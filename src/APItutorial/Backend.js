import React from 'react';
import { Card, Row, CardHeader, Col, Container, CardBody } from 'reactstrap';
import axios from 'axios';

class Backend extends React.Component {

    state = {
        user: [],
        todo: []
    }

    // fetch yordamida bazadan malumot olib kelish

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/comments')
    //     .then(comment => comment.json())
    //     .then(data => {
    //         this.setState({user: data})
    //     })
    // }

    // axios orqali bazadan malumot olib kelish

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(respon => {
                const todo = respon.data;
                this.setState({ todo })
            })
    }

    render() {
        return (
            <>
                {/* <Container>
                    <Row>
                        {
                            this.state.user.map((users) => (
                                <Col md="4">
                                    <Card key={users.id}>
                                        <CardHeader>
                                            <h2>
                                                {users.name}
                                            </h2>
                                        </CardHeader>
                                        <CardBody>
                                            <h3>
                                                {users.email}
                                            </h3>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container> */}

                <Container>
                    <Row>
                        {
                            this.state.todo.map((todos) => (
                                <Col md="4">
                                    <Card>
                                        <CardHeader>
                                            <h3>
                                                { todos.id }
                                            </h3>
                                        </CardHeader>
                                        <CardHeader>
                                            <p>
                                                { todos.title }
                                            </p>
                                        </CardHeader>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>


            </>
        );
    }
}

export default Backend;
