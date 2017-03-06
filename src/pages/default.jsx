import React from 'react';
import Navigation from '../components/navigation'

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navigation />
                <h1>React Meetup Tirol</h1>
            </div>
        );
    }
}
export default Home;
