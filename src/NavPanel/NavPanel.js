import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
export default class NavPanel extends Component {
    render() {
        return (
            <div>
                <button variant="primary">Load</button>
                <button>Show</button>
                <button>Save</button>
                <button>Print</button>
            </div>
        )
    }
}
