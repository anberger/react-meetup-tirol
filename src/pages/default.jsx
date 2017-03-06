import React from 'react';
import Navigation from '../components/navigation';
var request = require('xhr-request');

class Default extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        request('http://localhost:3000/report', {
            xml: true
        }, (err, res) => {
            if (err) console.log(err);
            console.log(res);
        })
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
export default Default;
