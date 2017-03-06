import React from 'react';
import ReactDOM from 'react-dom';
import Default from './pages/default';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Default),
        document.getElementById('mount')
    );
});
