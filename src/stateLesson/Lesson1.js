import React from 'react';

class Lesson1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Dostonbek",
            age: 22,
            job: "Frontend Developer",
            date: new Date()
        }
    }

    render() {
        console.log(this.state);
        return (
            <>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </>
        )
    }
}

export default Lesson1;
