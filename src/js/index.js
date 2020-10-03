'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/app.jsx';

function render()
{
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
}

async function main() {
    render()
}

main()