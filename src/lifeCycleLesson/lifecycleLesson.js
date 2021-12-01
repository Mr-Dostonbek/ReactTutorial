import React from 'react';

class LifecycleLesson extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor is working....");
        this.state = {};
    }

    componentDidMount() {
        console.log("DidMount is working...");
    }

    componentWillMount() {
        console.log("ComponentWillMount is working....");
    }

    render() {
        console.log("Render is working....");
        return (
            <div>
                
            </div>
        );
    }
}

export default LifecycleLesson;
